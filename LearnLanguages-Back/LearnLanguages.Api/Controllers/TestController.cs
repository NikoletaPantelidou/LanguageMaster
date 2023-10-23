using Microsoft.AspNetCore.Mvc;

namespace LearnLanguages.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TestController : ControllerBase
{
    [HttpGet("ping")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(string))]
    public ActionResult<string> Ping()
    {
        return Ok("Hello world!");
    }
}
