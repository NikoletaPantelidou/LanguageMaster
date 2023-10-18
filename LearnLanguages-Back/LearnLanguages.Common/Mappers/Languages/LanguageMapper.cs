using LearnLanguages.Common.Contracts.Languages.GetLanguages.Response;
using LearnLanguages.Data.Entities.LanguageEntity;

namespace LearnLanguages.Common.Mappers.Languages;
public static class LanguageMapper
{
    public static GetLanguageResponse GetLanguageResponseFromEntity(Language parameters)
    {
        return new GetLanguageResponse 
        {
            Code = parameters.Code, 
            Name = parameters.Name, 
            Flag = parameters.Flag
        };
    }
}
