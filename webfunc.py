def mapRanges(inputValue: float, inMin: float, inMax: float, outMin: float, outMax: float):
        slope = (outMax - outMin) / (inMax - inMin)
        return outMin + slope * (inputValue - inMin)