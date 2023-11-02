using System.ComponentModel.DataAnnotations;

namespace LearnLanguages.Common.Contracts.Accounts.RegisterAccount.Request;
public class RegisterAccountRequest
{
    public required string Username { get; set; }

    public required string Password { get; set; }


    [EmailAddress]
    public required string Email { get; set; }

    [Phone]
    public string? PhoneNumber { get; set; }
}
