using Business.Services;
using Business.Services.interfaces;
using DataAccess;
using DataAccess.Config;
using DataAccess.interfaces;
using Entities;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using EfEpisodeRepository = DataAccess.EfEpisodeRepository;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers().AddNewtonsoftJson(options =>
{
    options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
});
    
builder.Services.AddDataAccessServices(builder.Configuration);
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<ICharacterRepository, EfCharacterRepository>();
builder.Services.AddScoped<IEpisodeRepository, EfEpisodeRepository>();
builder.Services.AddScoped<ICharacterService, CharacterService>();
builder.Services.AddScoped<IEpisodeService, EpisodeService>();


builder.Services.AddAuthorization();
builder.Services.AddIdentityApiEndpoints<IdentityUser>()
    .AddEntityFrameworkStores<DefaultContext>();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapIdentityApi<IdentityUser>();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();


app.Run();