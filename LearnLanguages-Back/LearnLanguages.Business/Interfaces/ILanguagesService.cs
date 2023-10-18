using LearnLanguages.Common.Contracts.Languages.GetLanguages.Response;

namespace LearnLanguages.Business.Interfaces;
public interface ILanguagesService
{
    Task<List<GetLanguageResponse>> GetLanguages(); 
}
