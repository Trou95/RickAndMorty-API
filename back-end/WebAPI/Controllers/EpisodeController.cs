using Business.Services.interfaces;
using DataAccess.interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
[Authorize]
public class EpisodeController : ControllerBase
{
    private readonly IEpisodeService _episodeService;
    
    public EpisodeController(IEpisodeService episodeService)
    {
        _episodeService = episodeService;
    }
    

    [HttpGet]
    public IActionResult Get()
    {
        var res = _episodeService.GetAll();
        return Ok(res);
    }
    
    [HttpGet]
    [Route("{id}")]
    public IActionResult Get(long id)
    {
        var res = _episodeService.Get(c => c.Id == id);
        return Ok(res);
    }
}