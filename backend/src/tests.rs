use crate::create_rocket_server;
use rocket::http::{ContentType, Status};
use rocket::local::Client;

#[test]
fn post_plans() {
    let client = create_client();

    let mut res = client
        .post("/plans")
        .header(ContentType::JSON)
        .body(r#"{ "test": "hi" }"#)
        .dispatch();

    assert_eq!(res.status(), Status::Ok);
    let body = res.body().unwrap().into_string().unwrap();
    assert!(body.contains("hi"));
}

#[test]
fn post_plans_invalid_request() {
    let client = create_client();

    let res = client
        .post("/plans")
        .header(ContentType::JSON)
        .body(r#"{ "invalid_key": "hi" }"#)
        .dispatch();

    assert_eq!(res.status(), Status::UnprocessableEntity);
}

fn create_client() -> Client {
    return Client::new(create_rocket_server()).unwrap();
}
