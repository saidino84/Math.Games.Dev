package org.example.project.graphics.ninja.models



import androidx.compose.animation.core.Animatable
import androidx.compose.ui.graphics.Color


data class Weapon(
    val y: Float =0f,
    val x: Float=0f,
    val radius: Float =0f,
    val shootingSpeed: Float=0f
)
/**
 TARGETS
 * */
interface Target {
    val x: Float
    val y: Animatable<Float, *>
    val radius: Float
    val fallingSpeed: Float
    val color: Color

}
data class EasyTarget(
    override val x: Float =0f,
    override val y: Animatable<Float, *> =Animatable(0f),
    override val radius: Float =0f,
    override val fallingSpeed: Float =0f,
    override val color: Color = Color(0xFFFFFFF)
) : Target

data class MediumTarget(
    override val x: Float =0f,
    override val y: Animatable<Float, *> =Animatable(0f),
    override val radius: Float =0f,
    override val fallingSpeed: Float =0f,
    override val color: Color = Color(0xFF7F52FF),
    val lives:Int =2 //represents that how many weapons can achieve this target before get destroyed
): Target

data class StrongTaret(
    override val x: Float =0f,
    override val y: Animatable<Float, *> =Animatable(0f),
    override val radius: Float =0f,
    override val fallingSpeed: Float =0f,
    override val color: Color = Color(0xFFF6262),
    val lives:Int =2 //represents that how many weapons can achieve this target before get destroyed
): Target