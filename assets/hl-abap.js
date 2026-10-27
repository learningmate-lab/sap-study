/* highlight.js language definition for ABAP (hljs doesn't ship one).
   Comments: '*' in column 1 (whole line) and '"' to end of line. Strings: '...', `...`, |...{ expr }...|.
   Case-insensitive keywords; field symbols <fs>; system fields sy-xxx; chained statements (DATA: a, b.). */
(function () {
  if (!window.hljs) return;
  window.hljs.registerLanguage('abap', function (hljs) {
    var KW = [
      // declarations
      'REPORT', 'PROGRAM', 'DATA', 'TYPES', 'CONSTANTS', 'STATICS', 'TABLES', 'FIELD-SYMBOLS', 'PARAMETERS', 'SELECT-OPTIONS',
      'SELECTION-SCREEN', 'TYPE', 'LIKE', 'REF', 'TO', 'OF', 'LINE', 'VALUE', 'LENGTH', 'DECIMALS', 'OCCURS', 'WITH', 'HEADER',
      'BEGIN', 'END', 'STANDARD', 'SORTED', 'HASHED', 'TABLE', 'KEY', 'UNIQUE', 'NON-UNIQUE', 'DEFAULT', 'OBLIGATORY', 'RANGE',
      'ANY', 'INITIAL', 'SIZE', 'BLOCK', 'FRAME', 'TITLE', 'NO', 'INTERVALS', 'EXTENSION', 'RADIOBUTTON', 'GROUP', 'CHECKBOX',
      'AS', 'LISTBOX', 'VISIBLE', 'MEMORY', 'ID', 'MATCHCODE', 'OBJECT', 'MODIF', 'COMMENT', 'SKIP', 'ULINE', 'POSITION', 'PUSHBUTTON',
      'USER-COMMAND', 'INCLUDE', 'STRUCTURE', 'CONTROLS', 'TABLEVIEW', 'TABSTRIP', 'USING', 'SCREEN',
      // field symbols / references
      'ASSIGN', 'UNASSIGN', 'ASSIGNING', 'CASTING', 'COMPONENT', 'IS', 'ASSIGNED', 'BOUND', 'NOT', 'GET', 'REFERENCE', 'INTO',
      'CREATE', 'NEW', 'FREE', 'CLEAR', 'REFRESH',
      // memory
      'SET', 'PARAMETER', 'EXPORT', 'IMPORT', 'FROM', 'SHARED', 'BUFFER', 'DATABASE', 'DELETE',
      // control flow
      'IF', 'ELSEIF', 'ELSE', 'ENDIF', 'CASE', 'WHEN', 'OTHERS', 'ENDCASE', 'DO', 'TIMES', 'ENDDO', 'WHILE', 'ENDWHILE',
      'LOOP', 'AT', 'ENDLOOP', 'WHERE', 'EXIT', 'CONTINUE', 'CHECK', 'RETURN', 'STOP', 'LEAVE', 'AND', 'OR', 'BETWEEN', 'IN',
      'EQ', 'NE', 'LT', 'GT', 'LE', 'GE', 'CO', 'CN', 'CA', 'NA', 'CS', 'NS', 'CP', 'NP',
      // events
      'LOAD-OF-PROGRAM', 'INITIALIZATION', 'START-OF-SELECTION', 'END-OF-SELECTION', 'TOP-OF-PAGE', 'END-OF-PAGE',
      'LINE-SELECTION', 'OUTPUT', 'ON', 'HELP-REQUEST', 'VALUE-REQUEST', 'EXIT-COMMAND', 'FIRST', 'LAST', 'NEW-PAGE',
      // modularization
      'FORM', 'ENDFORM', 'PERFORM', 'CHANGING', 'RAISING', 'FUNCTION', 'ENDFUNCTION', 'CALL', 'EXPORTING', 'IMPORTING',
      'TABLES', 'EXCEPTIONS', 'METHOD', 'ENDMETHOD', 'CLASS', 'ENDCLASS', 'DEFINITION', 'IMPLEMENTATION', 'PUBLIC', 'PRIVATE',
      'PROTECTED', 'SECTION', 'METHODS', 'MODULE', 'ENDMODULE', 'PROCESS', 'BEFORE', 'AFTER', 'INPUT', 'FIELD', 'CHAIN', 'ENDCHAIN',
      'REQUEST', 'SUBSCREEN', 'INCLUDING', 'TRANSACTION', 'SUBMIT', 'RETURN', 'AND', 'MODE', 'UPDATE', 'MESSAGES', 'BDCDATA',
      'PF-STATUS', 'TITLEBAR', 'EXCLUDING', 'SCREEN', 'PROGRAM',
      // data manipulation
      'SELECT', 'SINGLE', 'ENDSELECT', 'UP', 'ROWS', 'ORDER', 'BY', 'APPENDING', 'CORRESPONDING', 'FIELDS', 'FOR', 'ALL', 'ENTRIES',
      'INNER', 'JOIN', 'LEFT', 'OUTER', 'DISTINCT', 'COUNT', 'MOVE', 'MOVE-CORRESPONDING', 'APPEND', 'INSERT', 'MODIFY', 'READ',
      'INDEX', 'BINARY', 'SEARCH', 'SORT', 'ASCENDING', 'DESCENDING', 'COLLECT', 'DESCRIBE', 'LINES', 'CONCATENATE', 'SEPARATED',
      'SPLIT', 'CONDENSE', 'TRANSLATE', 'REPLACE', 'SHIFT', 'WRITE', 'FORMAT', 'COLOR', 'INTENSIFIED', 'HOTSPOT', 'INPUT', 'HIDE',
      'MESSAGE', 'DISPLAY', 'RAISE', 'COMMIT', 'WORK', 'ROLLBACK', 'TRY', 'CATCH', 'ENDTRY', 'CLEANUP', 'ADD', 'SUBTRACT',
      'MULTIPLY', 'DIVIDE', 'COMPUTE', 'EXACT', 'CONV', 'COND', 'SWITCH', 'THEN', 'IS', 'SUPPLIED', 'REQUESTED', 'STRUCTURE'
    ];
    var seen = {}, list = [];
    KW.forEach(function (k) { if (!seen[k]) { seen[k] = 1; list.push(k.toLowerCase()); } });
    var TYPES = ['c', 'n', 'i', 'p', 'f', 'd', 't', 'x', 'string', 'xstring', 'int8', 'decfloat16', 'decfloat34', 'abap_bool', 'abap_true', 'abap_false', 'space'];
    return {
      name: 'ABAP',
      aliases: ['abap4'],
      case_insensitive: true,
      keywords: { $pattern: /[A-Za-z][A-Za-z0-9_\-]*/, keyword: list, type: TYPES, literal: ['abap_true', 'abap_false', 'space', 'initial'] },
      contains: [
        { className: 'comment', begin: /^\*/, end: /$/, relevance: 10 },
        { className: 'comment', begin: /"/, end: /$/, relevance: 0 },
        { className: 'string', begin: /'/, end: /'/, contains: [{ begin: /''/ }] },
        { className: 'string', begin: /`/, end: /`/, contains: [{ begin: /``/ }] },
        { className: 'string', begin: /\|/, end: /\|/, contains: [{ begin: /\\./ }, { className: 'subst', begin: /\{/, end: /\}/ }] },
        { className: 'variable', begin: /<[A-Za-z_][A-Za-z0-9_]*>/, relevance: 5 },        // field symbols
        { className: 'built_in', begin: /\b(sy|syst)-[A-Za-z0-9_]+/, relevance: 5 },      // system fields
        { className: 'number', begin: /\b\d+\b/, relevance: 0 },
        { className: 'operator', begin: /->\*|->|=>|\?=/, relevance: 2 },
        { className: 'punctuation', begin: /[.:,]/, relevance: 0 }
      ]
    };
  });
})();
