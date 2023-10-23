using LearnLanguages.Business.Interfaces;
using LearnLanguages.Common.Contracts.Languages.GetLanguages.Response;
using Microsoft.AspNetCore.Mvc;

namespace LearnLanguages.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LanguagesController : ControllerBase
{
    #region Attributes

    private readonly ILanguagesService _lenguageService;

    #endregion Attributes

    #region Constructors

    public LanguagesController(ILanguagesService lenguageService)
    {
        _lenguageService = lenguageService;
    }

    #endregion Constructors

    #region Public methods

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<GetLanguageResponse>))]
    public async Task<ActionResult<List<GetLanguageResponse>>> GetLanguages()
    {
        List<GetLanguageResponse> res = await _lenguageService.GetLanguages();
        return Ok(res);
    }

    #endregion Public methods 
}
