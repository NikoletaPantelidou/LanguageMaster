using LearnLanguages.Business.Interfaces;
using LearnLanguages.Common.Contracts.Languages.GetLanguages.Response;
using LearnLanguages.Common.Mappers.Languages;
using LearnLanguages.Data.Entities.LanguageEntity;
using LearnLanguages.Data.Impl;
using Microsoft.EntityFrameworkCore;

namespace LearnLanguages.Business.Impl;
public class LanguagesService : ILanguagesService
{
    #region Attributes

    private readonly Context _context;

    #endregion Attributes 

    #region Constructors
    public LanguagesService(Context context)
    {
        _context = context;
    }

    #endregion Constructors

    #region Public methods

    public async Task<List<GetLanguageResponse>> GetLanguages()
    {
        List<Language> languages = await _context.Set<Language>().ToListAsync();
        return languages.Select(LanguageMapper.GetLanguageResponseFromEntity).ToList();
    }

    #endregion Public methods 
}
