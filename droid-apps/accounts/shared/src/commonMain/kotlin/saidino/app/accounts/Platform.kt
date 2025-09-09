package saidino.app.accounts

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform