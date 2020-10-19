#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use]
extern crate rocket;
#[macro_use]
extern crate rocket_contrib;

#[cfg(test)]
mod tests;

use rocket_contrib::json::JsonValue;
use rocket_cors::{AllowedOrigins, Cors, CorsOptions};

// TODO: Support the ability to configure allowed cors origins on a per environment basis.
fn make_cors() -> Cors {
    let allowed_origins = AllowedOrigins::some_regex(&["^http://localhost:(.+)$"]);

    CorsOptions {
        allowed_origins,
        ..Default::default()
    }
    .to_cors()
    .expect("error while building Cors")
}

#[get("/status")]
fn status() -> JsonValue {
    json!({"status": "ok"})
}

fn create_rocket_server() -> rocket::Rocket {
    rocket::ignite()
        .mount("/", routes![status])
        .attach(make_cors())
}

fn main() {
    create_rocket_server().launch();
}
