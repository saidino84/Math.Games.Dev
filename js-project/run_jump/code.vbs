=IF(
    SUM(E10:F10)>0,
        IF(B11="",
            IF(B12="",
                RIGHT(SUBSTITUTE
                    (B13,", Remarks",""),7),
                RIGHT(SUBSTITUTE(B12,", Remarks",""),7)
                ),
                RIGHT(SUBSTITUTE(B11,", Remarks",""),7)
                ),
    "")