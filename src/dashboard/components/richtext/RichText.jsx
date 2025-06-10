// Importa o componente Editor do pacote TinyMCE para React
import { Editor } from "@tinymce/tinymce-react";

// Importa os hooks useRef e useEffect do React
import { useRef} from "react";

// Define o componente funcional EditorTinyMCE
// Ele recebe duas props:
// - value: conteúdo inicial do editor
// - onChange: função para lidar com alterações no conteúdo
export default function RichText({ value, onChange }) {
    // Cria uma referência para armazenar o editor TinyMCE depois que ele for inicializado
    const editorRef = useRef(null);

    // Retorna o componente Editor do TinyMCE com suas configurações
  return (
    <Editor
      // (Opcional) Chave de API do TinyMCE — pode deixar vazia em ambiente de teste
      apiKey="e336gbg1tc1kbnm6bkguie9l3ejdjzwbckt6k6qzs7k0zt91"
      // onInit: quando o editor for carregado, guarda a instância na referência
      onInit={(evt, editor) => (editorRef.current = editor)}
      // Define o conteúdo inicial do editor.
      // Usa o valor recebido via prop "value", ou uma string padrão
      //initialValue={value || "<p>Digite seu conteúdo aqui...</p>"}
      // Dispara toda vez que o conteúdo do editor for alterado
      // Envia o novo conteúdo para a função "onChange" passada via prop
      onEditorChange={(content) => onChange(content)}

      // Configurações do TinyMCE
      init={{
        height: 150,          // Altura do editor em pixels
        menubar: false,       // Oculta a barra de menu superior

        // Plugins ativos no editor (extensões de funcionalidade)
        plugins: [
          "advlist autolink lists link image charmap preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table code help wordcount",
          "code",           // plugin para exibir o botão de código
          "image",           // plugin para inserir imagens
          "emoticons",        // Plugin para adicionar emojis
          "mediaembed",      // Plugin para incorporar vídeos do YouTube
          "image",           // Plugin para inserir imagens
          "table",           // Plugin para tabelas
          "imageupload"      // Plugin para upload de imagens
        ],

        // Configuração da barra de ferramentas (toolbar)
        toolbar:
          "undo redo | formatselect | bold italic backcolor | " + // formatação básica
          "subscript superscript | image | code | " + 
          "alignleft aligncenter alignright alignjustify | " +     // alinhamento
          "bullist numlist outdent indent | removeformat | help" +   // listas e ajuda
          "table | mediaembed" // Tabela e Media Embed
      }}
    />
  );
}