import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';
import React from 'react';
import { useRouter } from 'next/router';

/*
function GlobalStyle() {
  return (
    <>
      <style global jsx>{`
      * {
        margin:0;
        padding:0;
        box-sixing:border-box;
        list-style:none;
      }
      body {
        font-family: 'Open Sans', sans-serif;
      }
      /// App fit Height 
      html, body, #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      // ./App fit Height 
      `}
      </style>
    </>
  )
} */

/* 
RESOLVENDO PROBLEMA DE Legacy octal escape is not permitted in strict mode
  
   |
50 |                 color: ${appConfig.theme.colors.neutrals[000]};

ADICIONE O '' SIMPLES no 000 ['000']
*/
/*

   h1 {
                color: red;
                font-size: 24px;
                font-weight: 600;
              } 
              

*/

function TittleComp(props) {
  console.log(props.children);
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>Boas vindas de volta!</Tag> { /* Todo componente tem que ser maiusculo a inicial */}
      { /* <span>{props.children}</span> comentario */}
      <style jsx>{`
              ${Tag} {
                color: ${appConfig.theme.colors.neutrals['000']};
                font-size: 24px;
                font-weight: 600;
              }
            `}</style>
    </>
  );
}

//{/* Comentario em JSX <GlobalStyle /> */

/*
// posso passa a tag h2 h3 para o tag do componente tittleComp
function HomePage() {
  return (
    <div>
     }
      <GlobalStyle />
      <TittleComp tag="tagChoose">Olá Teste Childrem</TittleComp>
      <h2>
        Discord - Alura Matrix
      </h2>
      <style jsx>{`
              h1 {
                color: red;
              }
              h2 {
                border:1px solid green;
              }
            `}</style>
    </div>
  );
}
 
export default HomePage  */


export default function PaginaInicial() {
  //const username = 'johnbuenodev';

  //setUsername é um hooks do reactjs, assim como o useRouter do nextjs  //hooks GANCHO PARA FAZER ALGUMA Ação
  const [username, setUsername] = React.useState(''); //declarado valor inicial para o userName
  
  ///Hook do nextjs para rotas
  const roteamento = useRouter();
  console.log(roteamento);

  //Alterado o appConfig valor 500 = #3F9142
  return (
    <>
      { /* <GlobalStyle /> */ }
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={ function (event) {
              //Previnir o carregamento default ao clicar no onSubmit
              event.preventDefault();
              console.log('Alguém submeteu o form');
              //Forma antiga de se fazer carregamento de nova pagina
              //window.location.href = '/chat';
              
              //SPA single page application
              roteamento.push('/chat');
              
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            {/* <TittleComp tag="h2">Boas vindas de volta!</TittleComp> */}
            <TittleComp>Boas vindas de volta!</TittleComp>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name}
            </Text>
           { /*
            <input type="text" value={username} onChange={ function (event) {
             console.log("Usuario digitou.");
             //event.target.value para pegar o valor do evento gerado no front atraves do valor inserido no input
             const valorInformado = event.target.value;
             setUsername(valorInformado);
            }} />  */ }
    
            <TextField
              fullWidth
              value={username}
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
              onChange={ function (event) {
                console.log("Usuario digitou.");
                const valorInformado = event.target.value;
                ///if(valorInformado.length > 2) {
                ///  setUsername(valorInformado);
                //}
                setUsername(valorInformado);
               }}
            /> 

            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}