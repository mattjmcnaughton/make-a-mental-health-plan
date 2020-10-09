#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;
#[macro_use] extern crate rocket_contrib;

#[cfg(test)] mod tests;

use rocket_contrib::json::{Json, JsonValue};
use rocket_cors::{
    AllowedOrigins, Cors, CorsOptions
};
use serde::Deserialize;

#[derive(Deserialize)]
struct Plan {
    test: String
}

// Need to support Cors for local development
fn make_cors() -> Cors {
    let allowed_origins = AllowedOrigins::some_regex(&[
        "^http://localhost:(.+)$",
    ]);

    CorsOptions {
        allowed_origins,
        ..Default::default()
    }
    .to_cors()
    .expect("error while building Cors")
}

#[post("/plans", format = "application/json", data = "<plan>")]
fn plans_create(plan: Json<Plan>) -> JsonValue {
    json!({"status": plan.test})
}

fn create_rocket_server() -> rocket::Rocket {
    // Eventually, we will only want to add the `cors` policy in dev.
    rocket::ignite().mount(
        "/",
        routes![plans_create]
    )
    .attach(make_cors())
}

fn main() {
    create_rocket_server().launch();
}