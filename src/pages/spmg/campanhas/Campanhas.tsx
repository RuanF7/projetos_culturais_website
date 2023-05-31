import SpmgButtons from '@/components/spmgButtons/SpmgButtons'
import { Box, Typography } from '@mui/material'
import React from 'react'

function Campanhas() {
  return (
    <>
      <SpmgButtons />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          marginLeft: 10,
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
          }}>
          <Box sx={{ backgroundColor: 'secondary.main', width: 584, height: 30 }}>

          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'primary.main',
            width: 584,
          }}>
            <Typography className="irmastm"
              sx={{
                fontSize: 70,
                display: 'flex',
                fontFamily: 'HeyAugust',
                textAlign: 'center',
                paddingTop: 2,
                color: 'secondary.main'
              }}
            >Campanhas Sindicais
            </Typography>
          </Box>
          <Box sx={{
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center', 
            paddingTop: 20, 
            width: 800,            
          }}>
            <Typography sx={{ textAlign: 'left', fontSize: 30, }}> O que é um sindicato?</Typography>
            <Typography sx={{ textAlign: 'left', paddingTop: 5, textIndent: 20, fontSize: 20, }}>
              Um sindicato é uma organização de trabalhadores formada para defender seus direitos e interesses, através de negociações entre a entidade e as instituições de poder vinculado aos mesmos.
            </Typography>
            <Typography sx={{ textAlign: 'left', textIndent: 20, fontSize: 20,}}>
              Organizações sindicais começam a se formar com a ascensão do capitalismo. Entre os séculos XVIII e XIX ocorre o surgimento de duas classes a burguesia e o proletariado, a primeira possui os meios de produção e a segunda vende sua mão-de-obra.
            </Typography>
          </Box>
          <Box sx={{
            display: 'flex',
             flexDirection: 'column',
            justifyContent: 'center', 
            paddingTop: 10, 
            width: 800,
          }}>
            <Typography sx={{ textAlign: 'left', fontSize: 30, }}> Atuação do SPMG</Typography>
            <Typography sx={{ textAlign: 'left', paddingTop: 5, textIndent: 20, fontSize: 20,}}>
              O SPMG presta serviço aos seus associados enquanto representante de seus interesses junto os órgãos governamentais do município de Gravataí.            </Typography>
            <Typography sx={{ textAlign: 'left', textIndent: 20, fontSize: 20, }}>
              Assistência jurídica;
              <br />
              Convênios com o comércio local;
              <br />
              <Typography sx={{ textAlign: 'left', textIndent: 1, fontSize: 20, }}>
                Representações da categoria em diversos conselhos municipais, como:
                <ul>
                  <li>Conselho Municipal de Educação,</li>
                  <li>Conselho Deliberativo do Instituto de Previdência dos Servidores Municipais de Gravataí (IPG);</li>
                  <li>Conselho Deliberativo do Instituto de Saúde dos Servidores de Gravataí (ISSEG);</li>
                  <li>Conselho Municipal de Alimentação Escolar;</li>
                  <li>Conselho do Fundo de Manutenção e Desenvolvimento da Educação Básica e de Valorização dos Profissionais da Educação (FUMDEB).</li>
                </ul>
              </Typography>
            </Typography>





          </Box>
        </Box>
      </Box >
    </>
  )
}

export default Campanhas