   # SOLID examples
  
   | Principle                        | Examples                             |
   | -------------------------------- | ------------------------------------ |
   | Single Responsibility Principle  | file extension.tshello.ts:25-35, class IPCClient |
   | Open / Closed Principle          | file electronExtensionService.ts:236-255, class Foo ElectronExtensionService method _createExtensionHost      |
   | Liskov Substitution Principle    | file notebookEditor.ts: 340-342 class NotebookEditor method getViewState (covariance of the return types in the subtype: INotebookEditorViewState in subClass and object in parent class) |
   | Interface Seggregation Principle | file EmmetNode.d.ts:27-37, interfaces CssToken, HtmlToken, Attribute extends interface Token |
   | Dependency Inversion Principle   | file markdownEngine.ts:112-115, class MarkdownItEngine dependency logger is interface ILogger but not a concrete class    |


   # Violations of each SOLID principle
   
   | Principle                        | Examples                             |
   | -------------------------------- | ------------------------------------ |
   | Single Responsibility Principle  | file commands.ts: 310-3272 class CommandCenter -this is a huge class, inside which we create instances of the classes CommandErrorOutputTextDocumentContentProvider, WorkspaceEdit, CreateBranchItem and others. These classes are potentially can be changed and affect the CommandCenter class. |
   | Open / Closed Principle          | file storage.ts: AbstractStorageService (236 line) has switch case block for scope in methods emitDidChangeValue and getKeyTargets. InMemoryStorageService class (612 line) extends AbstractStorageService class and also has switch case block for scope in methods getStorage and getLogDetails. Looks like Single Choice Principle is violated due to two modules of the system know about the complete list of scope |
   | Liskov Substitution Principle    | file notebookEditor.ts: 340 class notebookEditor method setOptions violate contravariance of the method arguments in the subtype (INotebookEditorOptions in subClass and  IEditorOptions in parent class), because INotebookEditorOptions extends ITextEditorOptions which extend IEditorOptions |
   | Interface Seggregation Principle | file task.ts: 13-23  Interface with all optional field |
   | Dependency Inversion Principle   | file languageProvider.ts: 25-35 LanguageProvider class get TypeScriptServiceClient class as a first argument of the constructor. I thinl it is better to use ITypeScriptServiceClient interface instead of TypeScriptServiceClient class |



