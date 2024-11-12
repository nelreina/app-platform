import { Hono } from "npm:hono";
try {
  const app = new Hono();
  app.get("/ping", (c) => {
    return c.text("pong");
  });

  app.get("/hello/:name", (c) => {
    const name = c.req.param("name");
    return c.json({ message: `Hello, ${name}!` });
  });

  app.get("posts", (c) => {
    return c.json([
        {
            id: 1,
            title: "Post 1",
            body: "This is post 1"
        },
        {
            id: 2,
            title: "Post 2",
            body: "This is post"
        }
    ]);
  })

  Deno.serve(app.fetch);
} catch (error) {
  console.error("❗️ Error: ", error.message);
}

