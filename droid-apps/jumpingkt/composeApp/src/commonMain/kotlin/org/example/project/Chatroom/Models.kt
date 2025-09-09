package org.example.project.Chatroom

data class XUser(val name: String, val password: String, val email: String, val phoneNumber: String)
data class Comment(
    val userId: Int,
    val postId: Int,
    val id: Int,
    val name: String,
    val email: String,
    val body: String
)