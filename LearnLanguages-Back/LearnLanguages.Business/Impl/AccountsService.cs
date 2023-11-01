using LearnLanguages.Business.Interfaces;
using LearnLanguages.Common.Contracts.Accounts.Authentication;
using LearnLanguages.Common.Contracts.Accounts.LoginAccount.Request;
using LearnLanguages.Common.Contracts.Accounts.RegisterAccount.Request;
using LearnLanguages.Common.Mappers.Account;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace LearnLanguages.Business.Impl;
public class AccountsService : IAccountsService
{
    #region Private attributes

    private readonly UserManager<IdentityUser> _userManager;
    private readonly SignInManager<IdentityUser> _signInManger;
    private readonly IConfiguration _configuration;

    #endregion  Private attributes

    #region Constructors

    public AccountsService(UserManager<IdentityUser> userManager, IConfiguration configuration, SignInManager<IdentityUser> signInManger)
    {
        _userManager = userManager;
        _configuration = configuration;
        _signInManger = signInManger;
    }

    #endregion Constructors

    #region Public methods

    public async Task<AccountAuthenticationDto> Register(RegisterAccountRequest parameters)
    {
        IdentityResult res = await _userManager.CreateAsync(AccountMapper.AccountRegisterParametersDtoToIdentityUser(parameters), parameters.Password);
        return res.Succeeded ? await BuildToken(parameters.Username) : throw new ApplicationException("Error creating user");
    }

    public async Task<AccountAuthenticationDto> Login(LoginAccountRequest parameters)
    {
        SignInResult res = await _signInManger.PasswordSignInAsync(parameters.Username, parameters.Password, false, true);
        return res.Succeeded ? await BuildToken(parameters.Username) : throw new UnauthorizedAccessException("Incorrect login");
    }

    public async Task<AccountAuthenticationDto> RefreshToken(HttpContext httpContext)
    {
        Claim usernameClaim = httpContext.User.Claims.FirstOrDefault(claim => claim.Type.ToLower() == "username") ?? throw new UnauthorizedAccessException("Claim not found");
        return !String.IsNullOrEmpty(usernameClaim.Value) ? await BuildToken(usernameClaim.Value) : throw new UnauthorizedAccessException("Error identifying user");
    }

    #endregion Public methods

    #region Private methods

    private async Task<AccountAuthenticationDto> BuildToken(string username)
    {
        SymmetricSecurityKey symmetricSecurityKey = new(Encoding.UTF8.GetBytes(_configuration["Security:JWTKey"] ?? throw new KeyNotFoundException("JWTKey Not Found")));
        SigningCredentials signingCredentials = new(symmetricSecurityKey, SecurityAlgorithms.HmacSha256);
        IdentityUser user = await _userManager.FindByNameAsync(username) ?? throw new UnauthorizedAccessException("Error identifying user");
        IList<Claim> userClaims = await _userManager.GetClaimsAsync(user);

        DateTime tokenExpiration = DateTime.UtcNow.AddHours(Convert.ToInt32(_configuration["Security:TokenExpirationHours"]));

        List<Claim> claims = new(userClaims)
        {
            new Claim("username", username),
        };

        JwtSecurityToken securityToken = new(null, null, claims, null, tokenExpiration, signingCredentials);

        return AccountMapper.JwtSecurityTokenToAccountAuthenticationDto(securityToken);
    }

    #endregion Private methods

}
