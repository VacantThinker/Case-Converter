function getName(email) {
    // change it
    let idx = email.indexOf("@");
    return email.slice(0, idx);
}