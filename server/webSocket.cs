app.UseEndpoints(endpoints =>{
    endpoints.MapGet("/", async context =>{
        await context.Response.WriteAsync("Hello World!");
    });

    endpoints.MapWebSocket("/ws", async (context, webSocket) =>
    {
        byte[] buffer = new byte[1024];
        WebSocketReceiveResult result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);

        while (!result.CloseStatus.HasValue){
            await webSocket.SendAsync(new ArraySegment<byte>(buffer, 0, result.Count), result.MessageType, result.EndOfMessage, CancellationToken.None);
            result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
        }

        if (result.CloseStatus.HasValue){
            await webSocket.CloseAsync(result.CloseStatus.Value, result.CloseStatusDescription, CancellationToken.None);
        }
    });
});
