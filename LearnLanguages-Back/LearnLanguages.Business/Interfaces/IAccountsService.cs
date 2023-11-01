using LearnLanguages.Common.Contracts.Accounts.Authentication;
using LearnLanguages.Common.Contracts.Accounts.LoginAccount.Request;
using LearnLanguages.Common.Contracts.Accounts.RegisterAccount.Request;
using Microsoft.AspNetCore.Http;

namespace LearnLanguages.Business.Interfaces;
public interface IAccountsService
{
    Task<AccountAuthenticationDto> Register(RegisterAccountRequest parameters);

    Task<AccountAuthenticationDto> Login(LoginAccountRequest parameters);

    Task<AccountAuthenticationDto> RefreshToken(HttpContext httpContext);
}
