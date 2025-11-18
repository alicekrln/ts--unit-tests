# 🤖 TypeScript i praktiken - Unit-tester

Denna uppgift innehåller en rad funktioner som saknar unit-tester. Studera funktionerna noga och skapa där efter tester som säkrar att de fungerar som förväntat. Att de returnerar det användaren förväntar sig att de returnerar, att de hanterar eventuella falsy värden m.m.

## 👩‍🔧 Steg

1. **Förberedelser**

   - Initiera NPM med `npm init -y`
   - Installera dev dependencyn `vitest`
   - Lägg till skriptet `"test": "vitest --watch"`
     - Med eller utan watch-flaggan beroende på om du vill att testerna körs om varje gång du sparar en ändring.

2. **Funktionerna**

   - I `src`-mappen finns ett antal funktioner som testerna ska skrivas för. Ta god tid på dig att bilda en uppfattning om vad de har för syfte och vad de returnerar eller inte returnerar. Tänk på att vissa funktioner returnerar olika saker beroende på vad de mottar för argument.

3. **Unit tests**

   - Skapa en mapp direkt i rotmappen som heter `tests`
   - Skapa test-filer med samma filnamn som funktionerna de testar och lägg till `.test` innan `.ts` - Om filen heter `utils.ts` ska testfilen heta `utils.test.ts`.

**_Vitest extension i VS Code_**
