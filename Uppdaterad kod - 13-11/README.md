# Hej hej

## Info
- Kör sass i kommandotolken med: `sass --watch scss/style.scss css/style.css` så bir allt bra :)

## Saker som var knas
- En röra med alla filer, städade upp
- Den egna css-filen var inte länkad
- Bootstrap-css fanns inbäddat två gånger
- JÄVLAR vad många secctions! Section är ett element som inte skall användas för mycket, det skall bara dela av större chunks av kod. Byt många mot en helt vanlig div, och låt en grupp vara section.
- Hallå de e kaos i eran html fil, har städat upp så det blir lättare att läsa.
- La till några nya scss filer så det blir enkelt att fixa saker
- Tog bort lite lång text
- Kolla i style.scss för att ändra lite fontstorlekar osv
- Klassen `g-2` är bootstraps klass för gutters, dvs marginalerna mellan rows och columns, har laggt till den på typ allt, samma gäller `py-0` som är för padding Y med 0 i värde
- Alla artiklar fick en länk, ta bort om så önskas
