#![feature(proc_macro_hygiene, decl_macro)]

extern crate rocket;

extern crate server;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    println!("Ew");
    server::init();

    Ok(())
}
