# Mud Calc — iPhone install

Works with no signal once installed. Nothing is saved or sent anywhere.

## Install (one time, needs signal)
1. Open this link **in Safari** (not Chrome or Gmail's built-in browser):
   `https://maxokern.github.io/mud-calc/`
2. Tap the **Share** button (square with an up arrow).
3. Scroll down and tap **Add to Home Screen** → **Add**.
4. Open **Mud Calc** from the new home-screen icon once.
5. Test it: turn on **Airplane Mode** and open Mud Calc again. It should still work.

## Use
Type the air gap in inches (decimals like 57.5 are fine). Barrels and gallons appear instantly.
- Liquid depth = 116 in − air gap
- Gallons come from the tank strapping chart (in-between inches are interpolated)
- Barrels = gallons ÷ 42

## Please double-check against the original paper strapping chart
These chart values were copied exactly from the Excel, but they look like possible typos:
- **58 in** liquid = 9,381.20 gal (the pattern suggests ~9,381.77)
- **88 in** liquid = 15,939.87 gal (the pattern suggests ~15,938.87)
- **36 → 37 in** jumps from ~170 to ~218.6 gal per inch (the Excel itself flagged 37–38 and 57–59)

If any are wrong, send the correct numbers and the app will be updated.
