using System.Linq.Expressions;
using Business.Services;
using Business.Services.interfaces;
using Core.Services.interfaces;
using DataAccess.interfaces;
using Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Dtos;

namespace WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
[Authorize]
public class CharacterController : ControllerBase
{

    private readonly ICharacterService _characterService;
    
    public CharacterController(ICharacterRepository characterRepository)
    {
        _characterService = new CharacterService(characterRepository);
    }
    
    [HttpGet]
    public IActionResult Get()
    {
        var res = _characterService.GetAll();
        return Ok(res);
    }
    
    [HttpGet]
    [Route("{id}")]
    public IActionResult Get(long id)
    {
        var res = _characterService.Get(c => c.Id == id);
        return Ok(res);
    }
    
}   