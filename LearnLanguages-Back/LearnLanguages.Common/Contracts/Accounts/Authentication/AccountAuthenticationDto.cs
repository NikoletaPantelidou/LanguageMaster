namespace LearnLanguages.Common.Contracts.Accounts.Authentication;
public class AccountAuthenticationDto
{
    public required string Token { get; set; }
    public required DateTime ExpirationDatetime { get; set; }
}
