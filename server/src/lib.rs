#![feature(proc_macro_hygiene, decl_macro)]
#[macro_use]
extern crate rocket;
use std::path::PathBuf;
use std::path::Path;
use rocket::response::NamedFile;

use rocket_contrib::serve::StaticFiles;

pub fn init() {
    rocket::ignite()
        .mount("/", routes![page])
        .launch();
}

#[get("/<path..>", rank = 0)]
fn page(path: PathBuf) -> Option<NamedFile> {
    match path.as_path().to_str().unwrap() {
        "bundle.js" => NamedFile::open(Path::new("/dist/bundle.js")).ok(),
        "bundle.js.map" => NamedFile::open(Path::new("/dist/bundle.js.map")).ok(),
        _ => NamedFile::open(Path::new("/dist/index.html")).ok(),
    }
    
}