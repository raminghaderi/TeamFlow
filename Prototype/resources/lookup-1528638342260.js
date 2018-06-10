(function(window, undefined) {
  var dictionary = {
    "4008d192-6a72-4c25-81b5-7be16837bb17": "phone menu",
    "f4370b4f-9e2e-4e45-84e2-d78242a7f7d6": "suggestion page",
    "e06dd781-fb2b-45a9-a3bd-5095c43bed69": "done",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "7a22e178-1acb-49c5-b29b-f924a3262562": "How to try",
    "7f2792be-d8dd-4732-80f8-0e29add7b31b": "selected product",
    "5f9b6c5a-d950-4245-87b2-18310b225842": "Proceed to check out",
    "b7d8cb29-5c0c-4083-855d-01873b5aadeb": "shoes",
    "a4b71c07-c040-436d-b225-4a133ffa19d7": "Screen 1_1",
    "5204e72a-d4e3-434d-aa4b-71171d43fcbe": "SELECT PRODUCT",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);