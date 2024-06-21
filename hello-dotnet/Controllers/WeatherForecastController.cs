using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace hello_dotnet.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;
    private static readonly ActivitySource _activitySource = new("demo-service");

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetWeatherForecast")]
    public IEnumerable<WeatherForecast> Get()
    {
        using var activity = _activitySource.StartActivity("GetWeatherForecast");

        callOtherService();
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)],
            NewData = "New Data..."
        })
        .ToArray();
    }

    public void callOtherService()
    {
        using var activity = _activitySource.StartActivity("callOtherService");
        _logger.LogInformation("Calling other service");
        // Delay 1 second
        Thread.Sleep(1000);
    }
}
