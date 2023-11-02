using LearnLanguages.Business.Interfaces;
using LearnLanguages.Common.Contracts.Accounts.Authentication;
using LearnLanguages.Common.Contracts.Accounts.LoginAccount.Request;
using LearnLanguages.Common.Contracts.Accounts.RegisterAccount.Request;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LearnLanguages.Api.Controllers;


[ApiController]
[Route("api/[controller]")]
public class AccountController : ControllerBase
{
    #region Private attributes

    private readonly IAccountsService _accountServices;

    #endregion Private attributes

    #region Constructors

    public AccountController(IAccountsService accountServices)
    {
        _accountServices = accountServices;
    }

    #endregion Constructors

    #region Public methods 

    [HttpGet("refreshToken")]
    [ProducesResponseType(200, Type = typeof(AccountAuthenticationDto))]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public async Task<ActionResult<AccountAuthenticationDto>> RefreshToken() => await _accountServices.RefreshToken(HttpContext);

    [HttpPost("register")]
    [ProducesResponseType(200, Type = typeof(AccountAuthenticationDto))]
    public async Task<ActionResult<AccountAuthenticationDto>> Register(RegisterAccountRequest parameters) => await _accountServices.Register(parameters);


    [HttpPost("login")]
    [ProducesResponseType(200, Type = typeof(AccountAuthenticationDto))]
    public async Task<ActionResult<AccountAuthenticationDto>> Login(LoginAccountRequest parameters) => await _accountServices.Login(parameters);

    #endregion Public methods
}
