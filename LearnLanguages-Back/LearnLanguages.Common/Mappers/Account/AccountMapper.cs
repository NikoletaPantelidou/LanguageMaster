using LearnLanguages.Common.Contracts.Accounts.Authentication;
using LearnLanguages.Common.Contracts.Accounts.RegisterAccount.Request;
using Microsoft.AspNetCore.Identity;
using System.IdentityModel.Tokens.Jwt;

namespace LearnLanguages.Common.Mappers.Account;
public static class AccountMapper
{
    public static IdentityUser AccountRegisterParametersDtoToIdentityUser(RegisterAccountRequest accountRegisterParametersDto)
    {
        return new IdentityUser
        {
            UserName = accountRegisterParametersDto.Username,
            Email = accountRegisterParametersDto.Email,
            PhoneNumber = accountRegisterParametersDto.PhoneNumber,
        };
    }

    public static AccountAuthenticationDto JwtSecurityTokenToAccountAuthenticationDto(JwtSecurityToken parameters)
    {
        return new AccountAuthenticationDto
        {
            Token = new JwtSecurityTokenHandler().WriteToken(parameters),
            ExpirationDatetime = parameters.ValidTo
        };
    }
}
