use crate::create_rocket_server;
use rocket::http::Status;
use rocket::local::Client;

#[test]
fn get_status() {
    let client = create_client();

    let mut res = client.get("/status").dispatch();

    assert_eq!(res.status(), Status::Ok);
    let body = res.body().unwrap().into_string().unwrap();
    assert!(body.contains("ok"));
}

fn create_client() -> Client {
    return Client::new(create_rocket_server()).unwrap();
}
