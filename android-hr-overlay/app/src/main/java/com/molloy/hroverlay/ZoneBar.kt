package com.molloy.hroverlay

import android.content.Context
import android.graphics.Canvas
import android.graphics.Color
import android.graphics.Paint
import android.graphics.RectF
import android.view.View

/**
 * Herzfrequenzzonen nach Garmin-Standard (Prozent der maximalen HF):
 * Z1 50–60 % grau, Z2 60–70 % blau, Z3 70–80 % grün, Z4 80–90 % orange, Z5 90–100 % rot.
 */
object Zones {
    val colors = intArrayOf(
        Color.rgb(0x9E, 0x9E, 0x9E), // Z1 grau
        Color.rgb(0x1E, 0x88, 0xE5), // Z2 blau
        Color.rgb(0x43, 0xA0, 0x47), // Z3 grün
        Color.rgb(0xFB, 0x8C, 0x00), // Z4 orange
        Color.rgb(0xE5, 0x39, 0x35), // Z5 rot
    )
    private val lower = doubleArrayOf(0.50, 0.60, 0.70, 0.80, 0.90)

    /** Exakte Zone als Kommazahl wie bei Garmin (z. B. 3.4); 0 = unter Zone 1. */
    fun zoneOf(bpm: Int, maxHr: Int): Double {
        val pct = bpm.toDouble() / maxHr
        if (pct < lower[0]) return 0.0
        for (i in 4 downTo 0) {
            if (pct >= lower[i]) {
                val frac = ((pct - lower[i]) / 0.10).coerceIn(0.0, 0.99)
                return i + 1 + frac
            }
        }
        return 0.0
    }
}

/** Fünf farbige Segmente, das aktive leuchtet voll, die Position in der Zone ist markiert. */
class ZoneBar(context: Context) : View(context) {
    private val d = resources.displayMetrics.density
    private val paint = Paint(Paint.ANTI_ALIAS_FLAG)
    private val rect = RectF()
    var zone: Double = -1.0   // -1 = keine Daten
        set(value) { field = value; invalidate() }

    override fun onMeasure(widthMeasureSpec: Int, heightMeasureSpec: Int) {
        setMeasuredDimension((110 * d).toInt(), (12 * d).toInt())
    }

    override fun onDraw(canvas: Canvas) {
        val gap = 2 * d
        val segW = (width - gap * 4) / 5f
        val active = if (zone >= 1) zone.toInt().coerceIn(1, 5) else 0
        for (i in 0 until 5) {
            val left = i * (segW + gap)
            val isActive = active == i + 1
            val inset = if (isActive) 0f else 2.5f * d
            rect.set(left, inset, left + segW, height - inset)
            paint.color = Zones.colors[i]
            paint.alpha = if (zone < 0) 60 else if (isActive) 255 else 90
            canvas.drawRoundRect(rect, 3 * d, 3 * d, paint)
        }
        // Positionsmarker innerhalb der aktiven Zone
        if (active > 0) {
            val x = (active - 1) * (segW + gap) + segW * (zone - active).toFloat()
            paint.color = Color.WHITE
            paint.alpha = 255
            canvas.drawRect(x - d, 0f, x + d, height.toFloat(), paint)
        }
    }
}
