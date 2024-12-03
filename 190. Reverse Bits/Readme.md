Reverse Bits - LeetCode 190 🔄
==============================

Problem ❓
---------

Reverse bits of a given 32 bits unsigned integer.

Solution Approach 🎯
--------------------

We use **bit manipulation** to reverse each bit position in the 32-bit number.

### Intuition 💡

Imagine you're:

1.  Taking each bit from right side
    
2.  Placing it on the opposite position on left side
    
3.  Like flipping a string of 32 characters!
    

### Visual Example 👁️

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   CopyInput:  00000010100101000001111010011100  Output: 00111001011110000010100101000000   `

Code 💻
-------

### JavaScript Implementation

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   javascriptCopyfunction reverseBits(n) {      let result = 0;      for (let i = 0; i < 32; i++) {          // Get rightmost bit          const lsb = n & 1;          // Place it in reverse position          const reverseLsb = lsb << (31 - i);          // Add to result          result = result | reverseLsb;          // Move to next bit          n = n >>> 1;      }      return result >>> 0;  }   `

Step by Step Breakdown 📝
-------------------------

Let's take a small number (5) as example:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   CopyInput: 5 (00000000000000000000000000000101)  1️⃣ First bit (1):     - Extract 1     - Place at position 31  2️⃣ Second bit (0):     - Extract 0     - Place at position 30  3️⃣ Third bit (1):     - Extract 1     - Place at position 29  4️⃣ Remaining bits:     - All zeros     - Place accordingly   `

Complexity ⚙️
-------------

*   **Time**: O(1) - always 32 iterations
    
*   **Space**: O(1) - constant extra space
    

Key Points 🔑
-------------

*   Works with all 32 bits
    
*   Handles unsigned integers
    
*   Uses efficient bitwise operations
    
*   JavaScript needs >>> 0 for unsigned conversion
    

Test Cases 🧪
-------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   javascriptCopyconsole.log(reverseBits(43261596))     // 964176192  console.log(reverseBits(4294967293))    // 3221225471  console.log(reverseBits(5))             // 2684354560   `

