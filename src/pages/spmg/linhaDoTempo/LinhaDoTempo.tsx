import SpmgButtons from '@/components/spmgButtons/SpmgButtons'
import { Box, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import BackToTopButton from '@/components/backToTopButton/BackToTopButton'
import styles from '../Spmg.module.css'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';



function LinhaDoTempo() {
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
            >Linha do Tempo do SPMG
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              color: 'warning.main',
              width: 800,
              margin: 15,
            }}>
            <Typography
              sx={{
                fontSize: 20,
                textAlign: 'left',
                textIndent: 20,
              }}>
              Em 1987 um grupo de professores começou a se reunir e discutir a criação de um sindicato para os trabalhadores do município de Gravataí. Em julho de 1988 foi fundada a Associação dos Professores Municipais de Gravataí (APMG).
              Em dezembro de 1988 o Sindicato dos Professores Municipais de Gravataí (SPMG) foi fundado. Neste período o Brasil discutia a nova constituição, após ter saído de uma ditadura militar (1964-1985).
            </Typography>

            <Typography
              sx={{
                fontSize: 20,
                textAlign: 'left',
                textIndent: 20,
              }}>
              No ano de 1996 esta instituição optou por representar todos os trabalhadores em educação da rede municipal, passando a se chamar: Sindicato dos Trabalhadores em Educação Pública Municipal de Gravataí, entretanto, mantiveram a sigla inicial. Atualmente, o SPMG possui mais de mil filiados.
            </Typography>
          </Box>
          <Box sx={{ width: 800, paddingTop: 5, }}>
            <Box sx={{ textAlign: 'left' }}>
              <Typography sx={{ fontSize: 20, }} >
                <Image
                  className={styles.imagemLeft}
                  src="/imagensSPMG/01.jpg"
                  alt="Imagem do livro Gravataí"
                  width={400}
                  height={300} />
                1988 - Uma reunião com apenas cinco professores discute a situação da categoria, na época formada apenas por celetistas que não possuíam a estabilidade do Plano de Carreira. Assim é criado o SPMG – Sindicato dos Professores Municipais de Gravataí.
                <br />
                <br />
                1991 - Discussão e aprovação do Regime Jurídico Único (RJU), que é o estatuto do servidor público.
                <br />
                <br />
                1992 - Conquista e aprovação das leis do Plano de Carreira e do Plano de Classificação de Cargos e Salários.
                <br />
                <br />
                1993 - I Seminário de Educação Pública Municipal de Gravataí, realizado pelo SPMG.
              </Typography>
              <br />
              <br />
              <Typography sx={{ fontSize: 20, }}>
                <Image
                  className={styles.imagemRight}
                  src="/imagensSPMG/02.jpg"
                  alt="Imagem do livro Gravataí"
                  width={400}
                  height={300} />
                1996 - Atrasos salariais recorrentes nos últimos anos. Realização do I Fórum Municipal de Educação: “Do caos a uma nova ordem”. Aprovação da lei do Instituto de Previdência e Assistência à Saúde dos Servidos Municipais de Gravataí (IPAG).
                <br />
                <br />
                1996 -1997 - Conquistas democráticas, com a aprovação de diversas leis:
                <br />
                <br />
                ·Eleição de Diretores;
                <br />
                ·Repasse Financeiro para as Escolas;
                <br />
                ·Criação dos Conselhos Escolares;
                <br />
                ·Criação do Conselho Municipal de Educação.
              </Typography>
              <br />
              <br />
              <Typography sx={{ fontSize: 20, }}>
                <Image
                  className={styles.imagemLeft}
                  src="/imagensSPMG/03.jpg"
                  alt="Imagem do livro Gravataí"
                  width={400}
                  height={300} />
                1998 - 1º Congresso Municipal de Educação realizado em conjunto com a Secretaria Municipal de Educação (SMED).
                <br />
                <br />
                2000 - II Fórum Municipal de Educação: “Qualificando a caminhada”.
                <br />
                <br />
                2001 - I Seminário sobre o IPAG.
                <br />
                <br />
                2002 - 2º Congresso Municipal de Educação
              </Typography>
              <br />
              <br />
              <Typography sx={{ fontSize: 20, }}>
                <Image
                  className={styles.imagemRight}
                  src="/imagensSPMG/04.jpg"
                  alt="Imagem do livro Gravataí"
                  width={400}
                  height={300} />
                2005 - Existem avanços na política salarial, porém neste período se discute a ausência de repasses para as escolas e a transferência de banco que realiza os pagamentos dos salários dos funcionários municipais.
                O governo Sérgio Stasinsky, do PT, opta por uma política de endividamento, atrasando inclusive os repasses do IPAG.
                <br />
                <br />
                2007 - 3º Congresso Municipal de Educação
              </Typography>
              <br />
              <br />
              <Typography sx={{ fontSize: 20, }}>
                <Image
                  className={styles.imagemLeft}
                  src="/imagensSPMG/05.jpg"
                  alt="Imagem do livro Gravataí"
                  width={400}
                  height={300} />
                2010 - Negociação das dívidas do IPAG e de uma política salarial para dois anos. I Fórum da Educação de Jovens e Adultos (EJA).
                <br />
                <br />
                2013 - Discussão sobre o plano de carreira dos profissionais que trabalham com a educação infantil.

                <br />
                <br />
                2014 - Greve geral dos funcionários públicos de Gravataí, motivados pela perda salarial, ausência de repasse da inflação e o sucateamento da política educacional.
                <br />
                Governo de Marco Alba do PMDB, caracterizando-se pelo retrocesso nas políticas educacionais e salariais.
                <br />
                <br />
                2018 - Greve pela manutenção IPAG-Saúde. Conseguiram negociar com o município e aprovaram a lei do Instituto de Saúde dos Servidores de Gravataí (ISSEG).
              </Typography>
            </Box>
            <Box sx={{ paddingTop: 15, textAlign: 'center' }}>
              <a href='https://www.youtube.com/watch?v=RBfWGvB_aNU&feature=youtu.be'
                target="_blank">
                <Image src='/imagensSPMG/depoimentoNestor.webp'
                  alt="Imagem do Video Depoimento do Nestor"
                  width={700}
                  height={400} />
              </a>
              <Box sx={{
                paddingTop: 10,
              }}>
                <Typography sx={{
                  fontSize: 20,
                  textAlign: 'left',
                  textIndent: 20,
                }}>
                  Um dos fundadores do SPMG, Nestor Ourique Medeiros escreveu o texto "SPMG - Medo e Esperança", relatando um pouco sobre a história dessa instituição. Disponibilizamos aqui o texto em PDF e a leitura do mesmo, realizada pelo autor, para que você possa conhecer mais detalhes sobre essa história.
                </Typography>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}>
                  <a href='https://967d34da-3410-43bb-b5c5-6b045bd84bfc.filesusr.com/ugd/3d8a5a_220c9e628d6b4323953cb5d9865f9017.pdf'
                    target="_blank"
                    style={{
                      textDecoration: 'none',
                      color: 'black'
                    }}
                  >
                    <PictureAsPdfIcon sx={{ fontSize: 40, paddingTop: 5, }} />
                  </a>
                </Box>
              </Box>
            </Box>

          </Box>
        </Box>
        <BackToTopButton />
      </Box>
    </>
  )
}

export default LinhaDoTempo