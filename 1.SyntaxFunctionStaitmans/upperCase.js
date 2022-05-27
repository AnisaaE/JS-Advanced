function foo(s) {
    return s.match(/\w+/g).join(", ").toLocaleUpperCase()
}foo("FUNCTIONS, IN, JS, CAN, BE, NESTED, I, E, HOLD, OTHER, FUNCTIONS")
