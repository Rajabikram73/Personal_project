var builder = WebApplication.CreateBuilder(new WebApplicationOptions
{
    Args = args,
    WebRootPath = "message-webpage"
});
var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

app.Run();
