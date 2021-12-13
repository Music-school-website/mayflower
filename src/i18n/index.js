import React from "react";

const contentList = {
    'en': {
        page:{
            language:'CN',
            remind:'Switching the language',
            home:{
                welcome: <h4 className="text-gradient">Welcome to the Mayflower Art Center</h4>,
                subtitle: <h1 className="text-gradient">BEST PART-TIME MUSIC SCHOOL</h1>,
                intro: <div>
                    <p>The May Flower Art Center is a music school founded in the United States. Our main goal is to develop creative teaching, break the bias of professional education, open up the path for amateurs to become talents, focus on solving the problems of having strong imitation yet lack of creativity, and guide students to use amateur learning to reach a professional level.”</p>

                    <p>The three components of The May Flower Art Center are: music courses, overseas music education agency, and music production. </p>

                </div>,
                about: <header className="heading">
                    <h2 className="entry-title">About Us</h2>
                    <div>
                        <p>The May Flower Art Center is located in Howard County, Maryland, USA. The founder, Mr. Yiming Wu, comes from China and is an outstanding professional composer. </p>

                        <p>In 2017, Mr. Yiming Wu and his family immigrated from China to Maryland and founded the May Flower Art Center. He has developed a unique teaching method for composition, and actively cultivates creative talents for the local. </p>

                        <p>Mr. Wu Yiming has always advocated “using amateur learning to reach a professional level”. In three years, through his dedicated guidance and the hard work of the students, from 2019 to April 2021, nearly 30 students won more than 150 important awards in national and international competitions. Some competitions are the top American or international composition competitions, such as the American Prize and Sibelius International Composition Competition; some competitions are organized by the government (such as the Austrian Chancellery, the Ministry of Culture of Kazakhstan); some competitions are organized by famous music schools Organized (such as: Franz Schubert Music Conservatory, Vienna Conservatory); some competitions are organized by famous symphony orchestras (such as: National Youth Orchestra in USA, the New Vienna Symphony in Austria); and some competitions are organized by American music organizations ( Such as: The American Composers Forum, Nation Parent Teacher Association). </p>

                    </div>

                </header>,
                explore:<div>
                    <header className="entry-header">
                        <h2 className="entry-title">Explore our school</h2>
                    </header>
                    <div className="entry-content">
                        <p>Learn from numbers of teachers around the world, different areas with different focuses.</p>
                    </div>
                </div>,
                outstanding:<div>
                    <header className="entry-header">
                        <h2 className="entry-title">Outstanding Students</h2>
                    </header>{/* .entry-header */}
                    <div className="entry-content">
                        <p>Expect more in the future</p>
                    </div>{/* .entry-content */}
                </div>,
                foundation:<div>
                    <header className="entry-header">
                        <h2 className="entry-title">May flower art foundation</h2>
                    </header>{/* .entry-header */}
                    <div className="entry-content">
                        <p>Expect more in the future</p>
                    </div>{/* .entry-content */}
                </div>,
                news:<div>
                    <header className="entry-header">
                        <h2 className="entry-title">News and honors</h2>
                    </header>{/* .entry-header */}
                    <div className="entry-content">
                        <p>Check out the latest music news around the world</p>
                    </div>{/* .entry-content */}
                </div>

            },

            pageHeader:{
                home:'Home',
                program:'Program',
                course:'Course',
                introduction:'Introduction',
                honor:'Honor',
                news:'News',
                foundation:'Foundation',
                contact:'Contact',
                musicProduction:'Music Production',
                oversea:'Overseas Music Education Agency'
            },

            introduction:{
                breadcrumb:['Home','Introduction'],
                title:'Our Stories',
                summary:'The Sino-American Mayflower Art Center ( hereafter, “the Art Center”) is located at Howard county in Maryland. Mr. Yiming Wu, the founder of the Arts Center, he is a excellent professional composer from China.',
                content:<div>
                    <p>In 2017, Mr. Yiming Wu and his family immigrated from China to Maryland and founded the May Flower Art Center. He has developed a unique teaching method for composition, and actively cultivates creative talents for the local. </p>

                    <p>Mr. Wu Yiming has always advocated “using amateur learning to reach a professional level”. In three years, through his dedicated guidance and the hard work of the students, from 2019 to April 2021, nearly 30 students won more than 150 important awards in national and international competitions. Some competitions are the top American or international composition competitions, such as the American Prize and Sibelius International Composition Competition; some competitions are organized by the government (such as the Austrian Chancellery, the Ministry of Culture of Kazakhstan); some competitions are organized by famous music schools Organized (such as: Franz Schubert Music Conservatory, Vienna Conservatory); some competitions are organized by famous symphony orchestras (such as: National Youth Orchestra in USA, the New Vienna Symphony in Austria); and some competitions are organized by American music organizations ( Such as: The American Composers Forum, Nation Parent Teacher Association). </p>

                    <p>Many competitions are professional competitions with no age limit. Participants are teachers from the Conservatory of Music, students from the Composition Department of the Conservatory, and professional composers. The students at The May Flower Art Center are only elementary, junior and high school students aged 9 to 17 who are amateurs of composition study. Nevertheless, in some competitions, the number of winners of The May Flower Art Center has exceeded that of professional conservatories. </p>

                    <p>Mr. Yiming Wu said: “Winning an award is not the main purpose, but to enhance students’ self-confidence, vision and creativity through the achievements. It could help them change their destiny, and lay a solid foundation for them to enter the Ivy League school for double majors. Max Lu, a student of The May Flower Art Center, has been successfully admitted to Columbia University in 2020 after winning a number of national and international top composition competition awards. In 2021, two more students were admitted to the world’s top conservatories, Berkeley Conservatory of Music and Eastman Conservatory of Music. </p>

                    <p>Since the establishment of The May Flower Art Center, more than 30 students have enrolled the program, from the original size of two students. The age of the students ranges from 5 to 17 years old. The students’ group has expanded from the state of Maryland to Virginia, Washington DC, New York, Texas, Singapore, China, etc. </p>

                    <p>In September 2020, The May Flower Art Center established an online school. In addition to composition classes, other courses were added, such as: Western music history, music theory, and instrument performance, etc. </p>

                    <p>In 2021, many well-known musicians and professors from conservatories have joined The May Flower Art Center. The school website was officially launched in April 2021. We are opening for music lovers all over the world. </p>

                    <p>The program of The May Flower Art Center is mainly formed in three parts: music courses, overseas music education agency, and music production. </p>

                    <p>1. Music courses: provide composition, music theory, sight singing, ear training, western music history, voice lesson, piano, violin/viola, bassoon, guzheng and pipa courses, etc. These courses are exclusively developed by the center based on the general course setting of American universities (including university preparatory courses) for systematic and professional learning. </p>
                    <p>2. Overseas music education agency: It is a brand created by The May Flower Art Center that focuses on global music study abroad and prestigious school application services. It is deeply involved in the high-end education field of the United States, and has helped many students to use their talent on music and finally enroll in the top prestigious schools. </p>
                    <p>3. Music production: The May Flower Art Center has nearly 50 young Chinese and American composers who possess international composing standards, with strong music creation capabilities.</p>

                </div>,
                about: <div>
                    <h2 className="entry-title">About Our School</h2>
                    <p>The May Flower Art Center is a music school founded in the United States. Our main goal is to develop creative teaching, break the bias of professional education, open up the path for amateurs to become talents, focus on solving the problems of having strong imitation yet lack of creativity, and guide students to “use amateur learning to reach a professional level.”</p>

                    <p>The three components of The May Flower Art Center are: music courses, overseas music education agency, and music production. </p>

                </div>,
                teacher:[
                    {
                        id:'1',
                        position:'Founder',
                        name:'Yiming Wu',
                        avator:'https://mayflower.s3.amazonaws.com/YimingW.jpg'

                    },
                    {
                        id:'2',
                        position:'Teaching Supervisor',
                        name:'Meng Wang',
                        avator:'https://mayflower.s3.amazonaws.com/WangM.jpg'

                    },
                    {
                        id:'3',
                        position:'Consultant',
                        name:'Shenying Qian',
                        avator:'https://mayflower.s3.amazonaws.com/ShenyingQ.jpg'

                    },
                ]
            },
            courses:{
                breadcrumb:['Home','Courses'],
                content:[
                    {
                        id:'1',
                        name:'Composition',
                        videoId:'',
                        teacher: [
                            {
                                id:'1',
                                name:'Yiming Wu',
                                introduction: '<p>Yiming Wu, composer, music educator, the founder of the May Flower Art Center. Mr. Wu graduated from the Composition Department of the Central Conservatory of Music, China, where he studied composing with Professor Zhenmin Xu, Changjun Xu and Liqiang Dong. He has also studied composing with Professor Michael Hersch who is the Director of Composition Department and Rome Prize winner, at Peabody Institute of Johns Hopkins University conservatory. In 2006, he was the first Chinese to participate in the three-pipe symphony and won the third prize of Takemistsu Composition Award in Japan at the age of 23. In 2008, he won second place in the third Harelbeke International Composition Competition in Belgium. In 2010, He was the recipient of the BMW Musica Viva Composition Prize in Germany. Yiming Wu\'s original concert music has been performed worldwide by notable orchestras such as the Tokyo Philharmonic Orchestra, the Bavarian Radio Symphony Orchestra, Beijing Symphony Orchestra, Belgium Royal Wind Orchestra, etc. </p>\n' +
                                    '\n' +
                                    '<p>His family immigrated to Maryland in 2017, where he founded the May Flower Art Center. He has developed a unique teaching method for composition, and actively cultivates creative talents for the local. Mr. Wu Yiming has always advocated "using amateur learning to reach a professional level". In three years, through his dedicated guidance and the hard work of the students, from 2019 to April 2021, nearly 30 students won more than 130 important awards in national and international competitions. Some competitions are the top American or international composition competitions, such as the American Prize and Sibelius International Composition Competition; some competitions are organized by the government (such as the Austrian Chancellery, the Ministry of Culture of Kazakhstan); some competitions are organized by famous music schools Organized (such as: Franz Schubert Music Conservatory, Vienna Conservatory); some competitions are organized by famous symphony orchestras (such as: National Youth Orchestra in USA, the New Vienna Symphony in Austria); and some competitions are organized by American music organizations ( Such as: The American Composers Forum, Nation Parent Teacher Association). </p>\n' +
                                    '\n' +
                                    '<p>Many competitions are professional competitions with no age limit. Participants are teachers from the Conservatory of Music, students from the Composition Department of the Conservatory, and professional composers. The students at The May Flower Art Center are only elementary, junior and high school students aged 9 to 17 who are amateurs of composition study. Nevertheless, in some competitions, the number of winners of The May Flower Art Center has exceeded that of professional conservatories. </p>\n' +
                                    '\n' +
                                    '<p>In September 2020, The May Flower Art Center established an online school. In addition to composition classes, other courses were added, such as: Western music history, music theory, and instrument performance, etc. </p>\n' +
                                    '\n' +
                                    '<p>In 2021, many well-known musicians and professors from conservatories have joined The May Flower Art Center. The school website was officially launched in April 2021. We are opening for music lovers all over the world.</p>\n'+
                                    '<a href="wuyiming.org">wuyiming.org</a>',
                                avator:'https://mayflower.s3.amazonaws.com/YimingW.jpg',
                            },
                            {
                                id:'2',
                                name:'Meng Wang',
                                introduction: '<p>Wang Meng is a Chinese composer currently based in Cincinnati. Her music has been performed internationally by notable orchestras and ensembles, including Brussels Philharmonic, Cincinnati Symphony Orchestra, Columbus Symphony, Jacksonville Symphony, MSM Composer’s Orchestra, China Youth Symphony; Aspen Contemporary Ensemble, Thin Edge New Music Collective, Longleash Trio, F- Plus Ensemble, among others.</p>\n' +
                                    ' \n' +
                                    '<p>Wang was a composer fellow at Aspen Music Festival, Cabrillo Music Festival and was selected to participate in 2019 [\'tactus] Young Composers Forum with Brussels Philharmonic and American Composers Orchestra EarShot readings in 2018. Recent commissions include a percussion ensemble piece for Shanghai Symphony in Chamber Concert series and a piano concerto for CCM Concert Orchestra.</p>\n' +
                                    '\n' +
                                    ' \n' +
                                    '<p>Wang is currently pursuing her DMA in composition at University of Cincinnati as a student of Prof. Douglas Knehans. She is an alumnus of Central Conservatory and Manhattan School of Music, where she held the Deolus W. Husband Scholarship for Composition in 2015-2017. Her primary instructors include composers Wenchen Qin, Reiko Füting. She also received instructions from composer Andreia Pinto Correia.</p>\n',
                                avator: 'https://mayflower.s3.amazonaws.com/WangM.jpg'
                            },
                            {
                                id:'3',
                                name:'Bo Dai',
                                introduction: '<p>Composer / Pianist / Harpsichordist</p>\n' +
                                    '<p>PhD in Composition</p>\n' +
                                    '<p>Lecturer, Composition Department, </p>\n' +
                                    '<p>Central Conservatory of Music (CCOM), Beijing</p>\n' +
                                    '\n' +
                                    '<p>Works: </p>\n' +
                                    '<p>Chamber music: Wavering Nostalgia; Cosmo-temporality; Footprints on the sands of time; Difference and Repetition; Prisoner’s Womb; The Garden of Forking Paths; Reflection II; Orchids in a hollow valley; Before the Rain; The Book of Sand. </p>\n' +
                                    '<p>Chamber Orchestra works：Illusion Butterfly. </p>\n' +
                                    '<p>Orchestral Works: Invisible Mountain; Wojski\'s Horn Concerto, Hymne. </p>\n' +
                                    '<p>Song cycle: The Call of Dawn. </p>\n' +
                                    '<p>Harpsichord Concertos: Space-time continuum - Pro et Contra. </p>\n' +
                                    '<p>Piano cycle: Disappeared Landscapes. </p>\n' +
                                    '\n' +
                                    '<p>His works were performed in many International Festivals, which include but not limited to the Contemporary Music Festival “Warsaw Autumn”; Morelia International Music Festival; Gdansk Festival of Contemporary Music; Focus! Festival: A Festival of Chinese Composition in Juilliard School; International Music Festival-Music and the Blind; China Shanghai International Arts Festival, Beijing Modern Music Festival, and Music Week of Association of Southeast Asian Nations. </p>\n' +
                                    '\n' +
                                    '<p>Film Score: </p>\n' +
                                    '<p>Documentary: The Journey of Chinese Plants. </p>\n' +
                                    '<p>CCTV Documentary: Eternal Smiles</p>\n' +
                                    '\n' +
                                    '<p>Dai Bo has been invited to give recitals and personal works concerts in New York, Morelia\n' +
                                    ', Mexico City and Beijing. He also gave lectures and masterclasses in The City University of New York，Brigham Young University, Bard College, and various Chinese institutions such as Beijing University, Beijing Institute of Technology, Changchun University, National Astronomical Observatories. Shared his music with the audience worldwide in Poland National TV Station, China Central Television, China Radio International, Radio Beijing, Beijing Music Radio, Radio Shanghai, Shanghai Music Radio, Huawei Digix Talk, etc. </p>\n' +
                                    '\n' +
                                    '<p>Evaluation: </p>\n' +
                                    '<p>Mr. Dai is hailed by the renowned composer Krzysztof Penderecki as “one of the most talented young composers among his peers.” Rachel Copper, the art director of the US Asian Society, praised that "Dai Bo has incredible composing talent, comparable with any great composer. Though he is blind, he is proficient in history and philosophy, integrates the East and West, and convey the universe in his music, which is not the way most people make music.”</p>\n',
                                avator: 'https://mayflower.s3.amazonaws.com/Bodai.jpg'
                            },
                            {
                                id:'4',
                                name:' Yikeshan',
                                introduction: '<p>Yikeshan Abudushalamu is an Uyghur composer who was born in Urumqi, Xinjiang, China on March 18th, 1985. </p>\n' +
                                    '<p>He studied composition with professors Guang Zhao and Shirui Zhu at Shanghai Conservatory from 2008 to 2013 for his bachelor\'s degree, and with professor Shirui Zhu from 2015 to 2019 for his master\'s degree. </p>\n' +
                                    '<p>During his study period, he obtained some awards as Excellent Award of China 2nd National Percussion Instrument Composition Competition in 2010, Winner of Shanghai 2nd Rivers Awards Composition Competition in 2010, and Excellence Award of Beijing 11th International Electronic Music Festival Composition Competition in 2014. </p>\n' +
                                    '<p>From 2012 to 2013, he was selected and sent by Shanghai Conservatory as an exchange student to Haute école de musique de Genève, where he studied composition with Michael Jarrell and electro-acoustic composition with Luis Naon. </p>\n' +
                                    '<p>In 2013, Ensemble XX. Jahrhundert of Austria had successfully premiered his commissioned string quartet ‘Modulation of Three Primary Colors’ at the 6th Shanghai New Music Week. </p>\n' +
                                    '<p>In 2015, he was a composer-in-residence of Manca Festival in Nice, France. </p>\n' +
                                    '<p>In 2019, he was the winner of Luciano Berio International Composition Competition. </p>\n' +
                                    '<p>Now he is a Shanghai-based freelance composer. </p>\n',
                                avator: 'https://mayflower.s3.amazonaws.com/Yikeshan.jpg'
                            },
                            // {
                            //     id:'5',
                            //     name:'Shenying Qian',
                            //     introduction: '',
                            //     avator: ''
                            // },
                            // {
                            //     id:'6',
                            //     name:'Yue Hu',
                            //     introduction: '<p>Hu Yue, a young composer, is a teacher from Composition Department of Xinghai Conservatory of Music. Graduated from the Central Conservatory of Music with a doctorate in composition, she was supervised by masters like Professor Liu Lin, Professor Luo Xinmin, and Professor Yang Yong. During college years, she won the National Scholarship and awarded Talent Model of Universities in Beijing, Advanced Individual on Social Practice of Capital Universities, Outstanding Graduate of Universities in Beijing.</p>\n' +
                            //         '\n' +
                            //         '<p>Hu’s representative works are orchestral music The Call, Ancient Echoes, chamber music works Dusk on Autumn River, Lusheng Dance, Whispers and so on, which have been invited by CCTV, Tsinghua University, National Center for the Performing Arts where put The days of the Nushu woman on the stage and other organizations. Suona and percussion music Surging Thoughts, folk music ensemble Five sound bites from the folk (included in Lingnan Elegant Music Collection), piano solo Full Moon were premiered in the Concert Hall of Xinghai Conservatory of Music and printed in Lingnan Style Piano Works Collection published by Jinan University Press. She has cooperated with Chinese and foreign performers, chamber orchestras and symphony orchestras, such as Hong Kong Youth Wind Band and China Dunshan Wind Band. </p>\n' +
                            //         '\n' +
                            //         '<p>Papers: On the Creation Techniques of Raza Vari’s Towards the Endless Plain, On the Application of Single-tone Thinking in the Suona Concerto Beckoning the Phoenix, On the orchestral composition of American contemporary composers Chinary Ung (published by People\'s Music Publishing House in 2017). </p>\n',
                            //     avator: 'https://mayflower.s3.amazonaws.com/YueH.jpg'
                            // },

                        ],

                        url:'https://mayflower.s3.amazonaws.com/compose.png',
                        summary:'This course aims to offer students one-on-one private instructions. The course plan is designed according to students’ different music styles and unique personal creativity. \n' +
                            '\n',
                        content:['The composition faculty experts include award-winning composers, Yiming Wu, Meng Wang, along with other guest composers. This course aims to offer students one-on-one private instructions. The course plan is designed according to students\' different music styles and unique personal creativity. Students will also have opportunities to participate in discussion forums organized by the Art Center and present their works to the guest composers and performers.']
                    },
                    {
                        id:'2',
                        name:'Music Theory',
                        videoId:'',
                        teacher: [
                            {
                                id:'1',
                                name:'Meng Wang',
                                introduction: '<p>Wang Meng is a Chinese composer currently based in Cincinnati. Her music has been performed internationally by notable orchestras and ensembles, including Brussels Philharmonic, Cincinnati Symphony Orchestra, Columbus Symphony, Jacksonville Symphony, MSM Composer’s Orchestra, China Youth Symphony; Aspen Contemporary Ensemble, Thin Edge New Music Collective, Longleash Trio, F- Plus Ensemble, among others.</p>\n' +
                                    ' \n' +
                                    '<p>Wang was a composer fellow at Aspen Music Festival, Cabrillo Music Festival and was selected to participate in 2019 [\'tactus] Young Composers Forum with Brussels Philharmonic and American Composers Orchestra EarShot readings in 2018. Recent commissions include a percussion ensemble piece for Shanghai Symphony in Chamber Concert series and a piano concerto for CCM Concert Orchestra.</p>\n' +
                                    '\n' +
                                    ' \n' +
                                    '<p>Wang is currently pursuing her DMA in composition at University of Cincinnati as a student of Prof. Douglas Knehans. She is an alumnus of Central Conservatory and Manhattan School of Music, where she held the Deolus W. Husband Scholarship for Composition in 2015-2017. Her primary instructors include composers Wenchen Qin, Reiko Füting. She also received instructions from composer Andreia Pinto Correia.</p>\n',
                                avator: 'https://mayflower.s3.amazonaws.com/WangM.jpg'
                            },
                        ],
                        url:'https://mayflower.s3.amazonaws.com/theory.png',
                        summary:'This course helps students establish the foundation of musicianship systematically. The course is divided into three levels, A1-A3, which will guide students through Beginner level to Advanced level smoothly.',
                        content:[
                            'If you are serious about music, music theory is something you MUST have and understand. This course helps students establish the foundation of musicianship systematically through the analysis of music elements, such as pitch, rhythm, harmony and musical form, etc.',
                            'to Advanced level smoothly. The system uses the leading textbook common to the Music Theory course in all American conservatories: The Complete Musician—An Integrated Approach to Tonal Theory, Analysis, authored by the department chair of The Juilliard School, Steven Laitz. Other references include specialized handouts integrated by the lecturer, allowing students to reach the American conservatories’ music theory undergraduate level by the end of the course.',
                            'This course includes a placement test before enrollment. Please consult XX or send us an email for more details.'
                        ]
                    },
                    {
                        id:'3',
                        name:'Western Music History ',
                        videoId: 'kVbDB124OYQ',
                        teacher: [
                            {
                                id:'1',
                                name:'Caroline Sackleh',
                                introduction: '<p>Caroline Sackleh received her Doctor of Musical Arts degree in Bassoon Performance from the University of Cincinnati College-Conservatory of Music with a cognate in Chamber Music; May 2020.</p>\n' +
                                    ' \n' +
                                    '<p>She is the Founder and Director of New Downbeat, a new music collective that features women musicians performing works from living composers. </p>\n' +
                                    ' \n' +
                                    '<p>In addition to her work in new music sphere, she is an active freelancer in and around the Cincinnati area and has performed with many notable orchestras: Kentucky Symphony Orchestra, Richmond Symphony Orchestra, Southwestern Ohio Philharmonic, Carmel Symphony Orchestra, Baton Rouge Symphony Orchestra, Rapides Symphony Orchestra, and the Urbana-Champaign Symphony Orchestra. </p>\n' +
                                    ' \n' +
                                    '<p>Caroline’s additional education includes a Master’s degree from Louisiana State University, and a Bachelor’s degree from the University of Illinois at Urbana-Champaign; both in Bassoon Performance. </p>\n' +
                                    ' \n' +
                                    '<p>Beyond her musical abilities, Caroline has gained over five years of College Admissions experience. Two years at Louisiana State University, and three years at the University of Cincinnati College-Conservatory of Music. </p>\n' +
                                    ' \n' +
                                    '<p>A native of Naperville, Illinois, Caroline began playing the bassoon in 7th grade after hearing Sergei Prokofiev’s “Peter and the Wolf” and thinking that the sound of the grandfather was the coolest thing ever! Her interests outside of music are gardening, cooking, and hiking. </p>\n',
                                avator:'https://mayflower.s3.amazonaws.com/CarolineS.jpg',
                            },
                        ],
                        url:'https://mayflower.s3.amazonaws.com/history.png',
                        summary:'The Western Music History course explores the music of the 17th Century through the 21st Century. Musical concepts and developments, composers, musical examples, and class discussions will all be part of the 10-week course.',
                        content:[
                            'The Western Music History course explores the music of the 17th Century through the 21st Century. Focusing on the Baroque era, Classical era, Romantic era, 20th Century, and 21st Century of Western music, as well as musical concepts and developments, composers, musical examples, and class discussions, will all be part of the 10-week course.'
                        ]
                    },
                    {
                        id:'4',
                        name:'Aural Skills',
                        videoId: '',
                        teacher: [
                            {
                                id:'1',
                                name:'Yiming Wu',
                                introduction: '<p>Yiming Wu, composer, music educator, the founder of the May Flower Art Center. Mr. Wu graduated from the Composition Department of the Central Conservatory of Music, China, where he studied composing with Professor Zhenmin Xu, Changjun Xu and Liqiang Dong. He has also studied composing with Professor Michael Hersch who is the Director of Composition Department and Rome Prize winner, at Peabody Institute of Johns Hopkins University conservatory. In 2006, he was the first Chinese to participate in the three-pipe symphony and won the third prize of Takemistsu Composition Award in Japan at the age of 23. In 2008, he won second place in the third Harelbeke International Composition Competition in Belgium. In 2010, He was the recipient of the BMW Musica Viva Composition Prize in Germany. Yiming Wu\'s original concert music has been performed worldwide by notable orchestras such as the Tokyo Philharmonic Orchestra, the Bavarian Radio Symphony Orchestra, Beijing Symphony Orchestra, Belgium Royal Wind Orchestra, etc. </p>\n' +
                                    '\n' +
                                    '<p>His family immigrated to Maryland in 2017, where he founded the May Flower Art Center. He has developed a unique teaching method for composition, and actively cultivates creative talents for the local. Mr. Wu Yiming has always advocated "using amateur learning to reach a professional level". In three years, through his dedicated guidance and the hard work of the students, from 2019 to April 2021, nearly 30 students won more than 130 important awards in national and international competitions. Some competitions are the top American or international composition competitions, such as the American Prize and Sibelius International Composition Competition; some competitions are organized by the government (such as the Austrian Chancellery, the Ministry of Culture of Kazakhstan); some competitions are organized by famous music schools Organized (such as: Franz Schubert Music Conservatory, Vienna Conservatory); some competitions are organized by famous symphony orchestras (such as: National Youth Orchestra in USA, the New Vienna Symphony in Austria); and some competitions are organized by American music organizations ( Such as: The American Composers Forum, Nation Parent Teacher Association). </p>\n' +
                                    '\n' +
                                    '<p>Many competitions are professional competitions with no age limit. Participants are teachers from the Conservatory of Music, students from the Composition Department of the Conservatory, and professional composers. The students at The May Flower Art Center are only elementary, junior and high school students aged 9 to 17 who are amateurs of composition study. Nevertheless, in some competitions, the number of winners of The May Flower Art Center has exceeded that of professional conservatories. </p>\n' +
                                    '\n' +
                                    '<p>In September 2020, The May Flower Art Center established an online school. In addition to composition classes, other courses were added, such as: Western music history, music theory, and instrument performance, etc. </p>\n' +
                                    '\n' +
                                    '<p>In 2021, many well-known musicians and professors from conservatories have joined The May Flower Art Center. The school website was officially launched in April 2021. We are opening for music lovers all over the world.</p>\n'+
                                    '<a href="wuyiming.org">wuyiming.org</a>',
                                avator:'https://mayflower.s3.amazonaws.com/YimingW.jpg',
                            },
                            {
                                id:'2',
                                name:'Meng Wang',
                                introduction: '<p>Wang Meng is a Chinese composer currently based in Cincinnati. Her music has been performed internationally by notable orchestras and ensembles, including Brussels Philharmonic, Cincinnati Symphony Orchestra, Columbus Symphony, Jacksonville Symphony, MSM Composer’s Orchestra, China Youth Symphony; Aspen Contemporary Ensemble, Thin Edge New Music Collective, Longleash Trio, F- Plus Ensemble, among others.</p>\n' +
                                    ' \n' +
                                    '<p>Wang was a composer fellow at Aspen Music Festival, Cabrillo Music Festival and was selected to participate in 2019 [\'tactus] Young Composers Forum with Brussels Philharmonic and American Composers Orchestra EarShot readings in 2018. Recent commissions include a percussion ensemble piece for Shanghai Symphony in Chamber Concert series and a piano concerto for CCM Concert Orchestra.</p>\n' +
                                    '\n' +
                                    ' \n' +
                                    '<p>Wang is currently pursuing her DMA in composition at University of Cincinnati as a student of Prof. Douglas Knehans. She is an alumnus of Central Conservatory and Manhattan School of Music, where she held the Deolus W. Husband Scholarship for Composition in 2015-2017. Her primary instructors include composers Wenchen Qin, Reiko Füting. She also received instructions from composer Andreia Pinto Correia.</p>\n',
                                avator: 'https://mayflower.s3.amazonaws.com/WangM.jpg'
                            },
                        ],

                        url:'https://mayflower.s3.amazonaws.com/aural.png',
                        summary:'Aural-skills is equally crucial as in Music Theory, which both are required for individual musicality. This course is a two-level study, focusing on ear training, sight-singing, rhythm, and dictation.',
                        content:[
                            'Aural-skills is equally crucial as in Music Theory, which both are required for individual musicality. This course is a two-level study, focusing on ear training, sight-singing, rhythm, and dictation. The introductory course includes writing, singing, recognizing intervals/scales/melodies/chords, and simple chord progressions. The advanced level will focus more on complex rhythms, cluster listening, atonal melodies, alternative scales, and harmonic structures.'
                        ]
                    },
                    {
                        id:'5',
                        name:'Voice Lesson',
                        videoId: '',
                        teacher: [
                            {
                                id:'1',
                                name:'Haibo Bai',
                                introduction: '<p>Soprano Hai Bo Bai graduated from the Tianjin Conservatory of Music and the Curtis Institute of Music. She studied with Chuan-juan Wang, Marlena Malas, Todd Duncan and Maryann Stabile Cooper. </p>\n' +
                                    '<p>In 1986, Bai received the Excellent Singer Award from the televised National Singing Competition in Beijing. In the same year, she was rewarded the First Prizes for The Tianjin Hope Cup Vocal Competition and Tianjin Minority Vocal Competition. </p>\n' +
                                    '<p>Throughout her career, she performed many lead roles in full Opera Productions with Opera International. Her leading roles include Contessa de Almaviva in Le Nozze di Figaro, Fiordiligi in Cosi Fan Tutte, Mimi in La Boheme, Cio Cio San in Madame Butterfly, Tosca in Tosca, Giorgetta in Il Tabarro, Alice in Falstaff, Desdemona in Othello, and Lidoine in Dialogues of the Carmelites. </p>\n' +
                                    '<p>Hai Bo Bai made her debut by presenting a vocal recital at Beijing Concert Hall in 1987. In the United States, she has performed in venues such as The Kennedy Center, Lincoln Center in New York, Alice Tully Hall, Strathmore and others. She performed Beethoven’s 9th Symphony and the Yellow River Cantata as a Soprano soloist with the New Jersey Westfield Symphony Orchestra. She has performed abroad in Italy, Germany and Canada. </p>\n' +
                                    '<p>She has been highly praised for her acting and singing in reviews by many news mediums such as The Washington Post, Opera News Magazine, and the Baltimore Sun. </p>\n' +
                                    '<p>After graduating in 1986, she continued to teach in the voice department at Tianjin Conservatory of Music. Right after her studies at the Curtis Institute of Music in 1991, she pursued a career in teaching and performing. In April of 2012, she was invited to give a series of masterclasses at the Tianjin Conservatory of Music and was then appointed to be a guest professor there. She has also given numerous masterclasses and has served as a judge in vocal competitions within the United States. Bai has enjoyed teaching voice for many years. Within her 35 years of teaching, she has fostered outstanding singers, some of whom have entered famous universities, have sung in major opera houses and concert halls, and have become teachers of voice themselves. </p>\n' +
                                    '\n',
                                avator:'https://mayflower.s3.amazonaws.com/Haibo+bai.jpg',
                            },
                        ],
                        url:'https://mayflower.s3.amazonaws.com/Shengyue.png',
                        summary:'Bai’s teaching curriculum is in Italian, German, English, French, and Spanish art songs and arias, sacred music, Chinese art and folk songs, and musical theatre. ',
                        content:[
                            'Bai’s teaching curriculum is centered around Bel Canto technique, with repertoire including Italian, German, English, French, and Spanish art songs and arias, sacred music, Chinese art and folk songs, and musical theatre. '
                        ]
                    },
                    {
                        id:'6',
                        name:'Guzheng',
                        videoId: '',
                        teacher: [
                            {
                                id:'1',
                                name:'Lei Gu',
                                introduction:'<p>Lei Gu is a distinguished guzheng instructor and founder of the Washington Dunhuang Guzheng Academy in the Washington Metropolitan area. She received her training from famous guzheng instructors from the Shanghai Conservatory of Music, professors Sun Wenyan and He Baoquan. </p>\n' +
                                    '\n' +
                                    '<p>Since moving to the United States and founding the Washington Dunhuang Guzheng Academy, she has received wide recognition as both a performer and an instructor. In order to create their unique performance style, she began to showcase her talent in various venues across Washington area. In 2010, she and her students successfully held the “The Dream of Dunhuang” guzheng concert, where she was fully able to showcase her creativity and innovative style. Her work has been highly acknowledged amongst professional musicians in the Washington Chinese music field. In 2014, she was awarded the Outstanding Teacher Certificate.</p>\n',
                                avator:'https://mayflower.s3.amazonaws.com/lei.jpg',
                            }
                        ],

                        url:'https://mayflower.s3.amazonaws.com/guzheng.png',
                        summary:'Through years of instructing experience, we have developed a well-designed and step-by-step teaching system. In addition to one-on-one courses, we also provide adult and youth group training classes.',
                        content:[
                            'In order to provide a high-quality and standardized teaching system for Guzheng enthusiasts, Washington Dunhuang Guzheng Academy has continued to innovate on not only the form of performance, but also the form of education. Through years of instructing experience, we have developed a well-designed and step-by-step teaching system. In addition to one-on-one courses, we also provide adult and youth group training classes. These group training courses are mainly for the groups with 3-4 student class size. Furthermore, we also provide a special project for early childhood music education. This project aims to offer children of toddler age the highest quality of training in contact with guzheng music, as well as cultivating their interests in guzheng music and basic finger training skills.'
                        ]
                    },
                    {
                        id:'7',
                        name:'Violin / Viola private lesson ',
                        videoId: '',
                        teacher: [
                            {
                                id:'1',
                                name:'Zhuo Diao',
                                introduction: '<p>Zhuo Diao is a graduate of The Central Conservatory of Music in Beijing, China with a Bachelor of Music in Performance, graduating Magna Cum Laude. She earned an Artist’s Diploma and a Master’s Degree in Viola Performance from Shenandoah University Conservatory in Virginia.</p>\n' +
                                    '<p>Zhuo’s performance history started at a young age, performing in orchestras for the following schools, October the First Middle School (Beijing), The High School Attached to Tsinghua University (Beijing), Central Conservatory of Music (Beijing), and Shenandoah Conservatory (Winchester,Virginia). Zhuo has traveled and performed all over the world with many famous composers including Seiji Ozama, Daniel Barenboim, Jan Wagner Yang, Werner Andreas Albert, Xincao Li, and Yongyan Hu. .</p>\n' +
                                    '<p>In her fourteen years of teaching experience, she has trained award-winning musicians. Several of her students have won the American Protege International Piano and String Competition, as well as the Washington Universal Piano and String Competition. Other students have been accepted and have performed with the American Youth Philharmonic Orchestra. Zhuo has also prepared students to attend universities such as MIT, University of California, University of Virginia, and Virginia Tech. 2015-Present  Teaching viola and violin private lesson in Northern Virginia area.</p>\n' +
                                    '\n' +
                                    '<p>Being bilingual in Chinese and English, Zhuo is sharing her passion and love for music with both Chinese and English speaking individuals.</p>\n',
                                avator:'https://mayflower.s3.amazonaws.com/zhuo.jpg',
                            }
                        ],

                        url:'https://mayflower.s3.amazonaws.com/violin.png',
                        summary:'Violin and viola lesson will be specifically tailored to each student. Includes the basic and technique training.',
                        content:[
                            'Beginner level: Basic training includes scales and etudes, Suzuki book 1-4',
                            'Intermediate level: Basic training includes scales and technical etudes, Suzuki book 5-8',
                            'Advanced level: Higher level technique training with advanced concerto, sonata, etc.',

                        ]
                    },
                    {
                        id:'8',
                        name:'Bassoon',
                        videoId:'',
                        teacher: [
                            {
                                id:'1',
                                name:'Caroline Sackleh',
                                introduction: '<p>Caroline Sackleh received her Doctor of Musical Arts degree in Bassoon Performance from the University of Cincinnati College-Conservatory of Music with a cognate in Chamber Music; May 2020.</p>\n' +
                                    ' \n' +
                                    '<p>She is the Founder and Director of New Downbeat, a new music collective that features women musicians performing works from living composers. </p>\n' +
                                    ' \n' +
                                    '<p>In addition to her work in new music sphere, she is an active freelancer in and around the Cincinnati area and has performed with many notable orchestras: Kentucky Symphony Orchestra, Richmond Symphony Orchestra, Southwestern Ohio Philharmonic, Carmel Symphony Orchestra, Baton Rouge Symphony Orchestra, Rapides Symphony Orchestra, and the Urbana-Champaign Symphony Orchestra. </p>\n' +
                                    ' \n' +
                                    '<p>Caroline’s additional education includes a Master’s degree from Louisiana State University, and a Bachelor’s degree from the University of Illinois at Urbana-Champaign; both in Bassoon Performance. </p>\n' +
                                    ' \n' +
                                    '<p>Beyond her musical abilities, Caroline has gained over five years of College Admissions experience. Two years at Louisiana State University, and three years at the University of Cincinnati College-Conservatory of Music. </p>\n' +
                                    ' \n' +
                                    '<p>A native of Naperville, Illinois, Caroline began playing the bassoon in 7th grade after hearing Sergei Prokofiev’s “Peter and the Wolf” and thinking that the sound of the grandfather was the coolest thing ever! Her interests outside of music are gardening, cooking, and hiking. </p>\n',
                                avator:'https://mayflower.s3.amazonaws.com/CarolineS.jpg',
                            },
                        ],

                        url:'https://mayflower.s3.amazonaws.com/Basson.png',
                        summary:'Private lessons for bassoonists of all skill levels.',
                        content:['Private lessons for bassoonists of all skill levels. Lessons will be specifically tailored to each individual while simultaneously covering the basics  in order to achieve full facility over the instrument. Advanced techniques and reed making will be discussed and worked on as lessons develop. Students can expect thorough instruction on how to play the bassoon and make progress, and have fun doing so!']
                    },
                    {
                        id:'9',
                        name:'Piano',
                        videoId: '',
                        teacher: [
                            {
                                id:'1',
                                name:'Dongni Xie',
                                introduction: '<p>Dr. Dongni Xie is one of the most exciting young musical talents to emerge from Texas in recent years. She is in demand throughout the United States, Europe and Asia, having performed in venues including Chateau de Fontainebleau (France), Dream Forest Art Center (South Korea), Gijon City Hall (Spain), and the Wallis Annenberg Center for the Performing Arts (US). Her most prominent performances include opening the 2017/2018 season of the Boulder Symphony Orchestra as well as her solo debut at Carnegie Hall. She boasts appearances as featured artist at many international music festivals, including the Imago Sloveniae (Slovenia), Festival ARTIS (Slovakia), and the August Music Festival (UK) to name but a few. She is a big supporter of young American musical talent, performing with the Debut Orchestra, Los Angeles’ premier youth orchestra, in 2016. Dr. Xie is not only respected as a musician, but also as an academic, having been invited to give lectures at El Paso University (US) and Huzhou Normal University (China), and to deliver master classes at venues throughout China.</p>\n' +
                                    '<p>Dr. Xie is a leader in the interplay between classical and modern music, having founded In6ix, a sextet combining both jazz and classical styles. Xie successfully led her group as pianist on tour throughout China in 2019, giving concerts and master classes at the 2019 Jazz Music Season in Shanghai Conservatory of Music and Zhejiang Conservatory of Music. Further tours are planned in the future. </p>\n' +
                                    '<p>Dr. Xie has served as a piano instructor teaching piano class and lesson at the University of North Texas for four years. She is currently an Adjunct Professor at Tarrant County College. </p>\n' +
                                    '<p>Education</p>\n' +
                                    '<p>University of North Texas, Doctor of Music Art in Piano </p>Performance <p>University of Southern California, Graduate Certificate in Piano Performance</p>\n' +
                                    '<p>Peabody Institute of Johns Hopkins University, Master of Music in Piano </p><p>Performance Shanghai Conservatory of Music, Bachelor of Music in Piano Performance</p>\n' +
                                    '<p>Awards (Recent) </p>\n' +
                                    '<p>Gold Medalist, West Virginia International Piano Competition, Morgantown, VA Gold Medalist, Odyssiad International Competition, Fort Collins, CO</p>\n' +
                                    '<p>Gold Medalist, Young Texas Artist Music Competition, Conroe, TX</p>\n' +
                                    '<p>Grand Prize, IBLA Rotary Club Ragusa International Competition, Sicily, Italy Grand Prize, Solo, American Piano Competition, Los Angeles, CA</p>\n' +
                                    '<p>First Prize, Isabel Scionti Piano Competition, Denton, TX</p>\n' +
                                    '<p>First Prize, Solo, SAI Young Artist Scholarship Competition, Los Angeles, California Second Prize, Memphis International Piano Competition, Memphis, TN</p>\n' +
                                    '<p>Second Prize, YMF Debut Young Artist Concerto Competition, Los Angeles, CA Third Prize, Carmel Music Society International Piano Competition, Carmel, CA Third Prize, Young Chang Piano Competition, Seoul, South Korea</p>\n',
                                avator: 'https://mayflower.s3.amazonaws.com/Dongni+Xie.jpeg'
                            },
                            {
                                id:'2',
                                name:'Renhe Jiao',
                                introduction: '<p>Category: Instrumental Performance</p>\n' +
                                    '\n' +
                                    '<p>Graduated from the Central Conservatory of Music</p>\n' +
                                    '<p>Learn from Professor Bian Meng</p>\n' +
                                    '<p>20 years of professional piano teaching experience</p>\n' +
                                    '<p>Served as a judge of major piano competitions</p>\n' +
                                    '<p>Many students have won prizes in international piano competitions</p>\n' +
                                    '\n' +
                                    '<p>Piano Performance</p>\n' +
                                    '\n' +
                                    '<p>Description: </p>\n' +
                                    '\n' +
                                    '<p>Piano performance is a basic course for music learning. Whether you want to engage in professional piano performance in the future or engage in composition, conducting, vocal and other related majors, it is very important to strengthen the training of basic piano skills and the learning of related basic knowledge. </p>\n' +
                                    '\n' +
                                    '<p>This set of courses contains content from piano introduction to quasi-professional</p>\n' +
                                    '\n' +
                                    '<p>The course is divided into three levels: </p>\n' +
                                    '<p>A1: (Level 1-3) </p>\n' +
                                    '<p>A2: (Level 4-6) </p>\n' +
                                    '<p>A3: (Level 7-8) </p>\n' +
                                    '\n' +
                                    '<p>The textbook uses the piano subjects (levels 1-8) for The Associated Board of the Royal Schools of Music</p>\n' +
                                    '<p>The Associated Board of the Royal Schools of Music is called an international examination, and it is recognized as one of the most authoritative music examinations internationally</p>\n' +
                                    '\n' +
                                    '<p>Systematic learning This course can not only train scientific piano performance methods, but also master sight-reading, basic music theory, sight-singing, ear training and other related content, which is of great help to improve students\' comprehensive music accomplishment. </p>\n',
                                avator: 'https://mayflower.s3.amazonaws.com/RenheJ.jpg'
                            },

                        ],
                        url: 'https://mayflower.s3.amazonaws.com/piano.png',
                        summary: 'Open to students in all different levels. From introducing piano playing and basic skills (sight-reading, finger independence, coordination) to being proficient and confident at playing assigned pieces. ',
                        content: [
                            'Open to students in all different levels. From introducing piano playing and basic skills (sight-reading, finger independence, coordination) to being proficient and confident at playing assigned pieces. It also provides a deep understanding of music in the historical and cultural context for more advanced students, helping them to build substantial repertoire and a capability of interpreting authentically and artistically. Each student will receive individually tailored weekly training.',
                            'Beginning Level',
                            'Starting from zero, learning all the basics of playing piano, the lessons include notations, rhythm and hands coordination, building a good foundation of music appreciation, developing a greater focus, patience and determination.',
                            'Intermediate to advanced levels of students',
                            'Developing each student’s pianistic potential and preparing them for piano competitions and concerts, through balanced repertoire, progressive technique, comprehensive knowledge of piano literature, the Art Center also offers great performance opportunities, as well as the preparations of college music auditions and introduction of college music courses.'
                        ]
                    },
                    {
                        id:'10',
                        name:'Pipa',
                        videoId: '',
                        teacher: [
                            {
                                id:'1',
                                name:'Jin Yang',
                                introduction: '<p>Yang Jin was born in Datong, Shanxi in 1982. At the age of 11, Jin was admitted into the world-famous Central Conservatory of Music in Beijing with the highest national score, and remained in first place through the 14 years of school until graduating in 2009 with her master\'s degree. Before relocating to the U.S., she was an assistant professor at Wuhan Conservatory of Music in Hubei, China. </p>\n' +
                                    '\n' +
                                    '<p>A performer of incomparable technique and exquisite musicality, Yang Jin has won numerous international and national competitions, including first prize in the TianHua National Youth Traditional Music Competition at age 15, and the Silver Award of the most prestigious Chinese Golden Bell Award in November 2004. In 2009, Jin won the 16th Taipei National Music Competition Merit Award and received commendation from the committee chair, Mr. Lin Gufang, that she proved herself to be “The most potential soloist”. </p>\n' +
                                    '\n' +
                                    '<p>Being very active on the world stage, she has performed in China, Macao, Taiwan, Hong Kong, France, Britain, Japan, the Philippines, and the United States. Yang Jin has performed as a soloist with many well-known orchestras, including Hong Kong Chinese Orchestra, Macao Chinese Orchestra, Shanghai Symphony Orchestra, Japan\'s royal city orchestra, Chinese Orchestra of Central Conservatory of Music and The Chamber Orchestra of Pittsburgh. </p>\n' +
                                    '\n' +
                                    '<p>In addition to numerous solo concerts and recordings published in more than ten albums in China, Taiwan, Japan and other places, her album of “folk music master Pipa solo” has won both Gold production and Gold sales of China International Exposition of Audio-Visual Industry in 2006. </p>\n' +
                                    '\n' +
                                    '<p>In March 2010, she was the only mainland pipa performer selected to participate in a workshop led by the Kronos Quartet and Wu Man at Carnegie Hall. Jin is a solo performer of Cleveland Chinese Music Ensemble, Pittsburgh Purple Bamboo Ensemble, Helio Phoenix Ensemble and Afro Yaqui Music Collective and has performed hundreds of concerts in Ohio, Pennsylvania and Washington DC. </p>\n' +
                                    '\n' +
                                    '<p>She has been invited to perform with Yo-Yo Ma\'s Silk Road Projects since 2016 and staged on Lincoln Center, Kennedy Center, Harris Theater and Sadler’s Wells. She launched the “Yangjin and friends” crossover series that explores the relationship between the East and West through creativity and virtuosity and have won widespread attention and praise. </p>\n' +
                                    '\n' +
                                    '<p>Jin is an instructor of University of Delaware Master Players Concert & festival and a judge of the Hummingbird international music festival & competition of Eastman school of music. She is also an adjunct pipa instructor at University of Central Oklahoma. </p>\n' +
                                    '\n' +
                                    '<p>With rigorous training for decades and diverse performance experiences, she is reputed as a leading and most passionate Pipa soloist of her generation.</p>\n',
                                avator: 'https://mayflower.s3.amazonaws.com/JinY.jpg'
                            },
                        ],
                        url: 'https://mayflower.s3.amazonaws.com/Pipa.png',
                        summary: 'The pipa course of the center aims to guide students with appreciating the beauty of traditional Chinese music, improving musical literacy, falling in love with music in a short amount of time, mastering pipa playing skills and cultivating diversified performing talents.',
                        content: [
                            'Chinese Lute, with a history of more than two thousand years, was introduced to China from Persia during the Qin Dynasty. Because of its wide range, variety of timbre, rich expressiveness, and diverse playing skills, the pipa is known as the "King of Chinese Music."',
                            'Nowadays, thanks to the hard work of musicians such as Wu Man, this ancient musical instrument with a deep oriental charm has become full of vitality on the western mainstream stage.',
                            'Avant-garde composer Luo Hurrison, minimalist master Terry Riley, and Philip Glass have created music for Pipa. Whether it is for a symphony orchestra, chamber orchestra, or jazz band, they all have a quite good cooperation with Pipa.',
                            'Bard College in New York, Minnesota State University, Central Oklahoma University, and University of Sydney have all opened pipa performance major.',
                            'The pipa course of the center aims to allow students to appreciate the beauty of traditional Chinese music, improve their musical literacy, fall in love with music in a short time, master pipa playing skills and cultivate diversified performing talents. Participating in international competitions, grade examinations, and cooperating with chamber music, world music, Jazz music and symphony orchestras.',
                            'Elementary class includes zero-based music enlightenment, learning basic playing techniques, training intonation and rhythm. ',
                            'Intermediate class offers increased skills training, improving music strengthening skills, enriching musical imagination, and joining chamber music training. (The references include Central Conservatory of Music textbooks and ensemble textbooks)',
                            'Advanced class provides advanced skill training, specializing on music expression to enhance professional performance ability, and enhancing the training of chamber music and concertos. (The references include Pipa Concerto Collection, Pipa Modern Creation Collection and Chamber Music Collection).'
                        ]
                    },
                    {
                        id:'11',
                        name:'Clarinet',
                        videoId: '',
                        teacher: [
                            {
                                id:'1',
                                name:'Yu-Ting Cheng',
                                introduction: '<p>Hailed for her “extraordinary virtuosity” (CHIMI Arts Award), as well as for her “sublime playing” and “radiant tone” (Pulitzer Prize-winning composer John Corigliano), Taiwanese clarinetist Yu-Ting Cheng has revealed her uncommon musical versatility and earned recognition as a solo artist by winning numerous first prizes in her younger career, including the national music competition Hsing-Tien Kong Young Artist Award, the 2019 Stony Brook Concerto Competition, the 32nd CHIMEI Arts Award and the 5th North International Music Competition. </p>\n' +
                                    '<p>Additionally, Yu-Ting is the recipient of the 2015 Valeri Canady Foundation Scholarship in clarinet performance and the 2017 Outstanding Alumni Award of Taiwan Chapter Society of Peabody Conservatory Alumni. Awarded fellowships by the highly reputable Norfolk New Music Workshop (2019) and LUCERNE Festival Academy (2020), Yu-Ting’s exceptional and remarkable performance on contemporary music is unparalleled in the field of her work. She is also the artist-in-residence of 2020 “Stars of Tiding” O-Bank Education Foundation, and will be giving her solo recital in Taiwan this September. </p>\n' +
                                    '<p>She performs frequently across the US and Asia. Deeply committed to sharing her passion through music, she also engages students and community audiences through frequent school and outreach concerts, lecture recitals and master classes. She regularly held recitals and concerts in Taiwan at National Taiwan Concert Hall and Weiwuying National Kaohsiung Center for the Arts. Recent highlights include solo performances of Corigliano Clarinet Concerto with Maestro Michael Morgan and Stony Brook Symphony Orchestra, broadcasted by Clarinet Corner on Troy Public Radio; Bellini Sinfonia Breve in D major with Maestro Philip Nuzzo and Brooklyn Chamber Orchestra; Unsuk Chin “Advice from a Caterpillar” for Solo Bass Clarinet on Reflections in Music’s Young Musicians Concert. Additional highlights include chamber performances of Mozart “The Kegelstatt Trio” K. 498 and Bruch Eight Pieces with New Asia Chamber Music Society, Danzi g-Minor Quintet Op. 56 and Coleman Umoja with Norfolk Woodwind Quintet, Ibert Trois Pièces Brèves, Mozart Serenade and Piazzolla Libertango with Brooklyn Chamber Orchestra. </p>\n' +
                                    '<p>As a composer, her composition “Haya- for Solo Clarinet and Electronics” was selected by the 2016 Electronic Music Midwest Festival and the 2018 New York City Electroacoustic Music Festival. She was invited to be the presenter of TEDx Talk to perform and share her composition process of her piece “Haya”. Her commissioned piece “Meditation- for Solo Violin, Pre-recorded Piano and Electronics” by Taiwan Chapter Society of Peabody Alumni had its world premiere at the National Concert Hall in Taipei. </p>\n' +
                                    '<p>A native of Taipei, Taiwan, Yu-Ting received a Master’s degree at Peabody Institute of the Johns Hopkins University, where she studied with Steven E. Barta. She also holds a Doctoral degree from Stony Brook University under the guidance of Alan R. Kay. She is currently the B-flat/ Bass clarinetist with the Brooklyn Chamber Orchestra.</p>',
                                avator: 'https://mayflower.s3.amazonaws.com/YutingZ.JPG'
                            },
                        ],
                        url: 'https://mayflower.s3.amazonaws.com/Clarinet.png',
                        summary: 'Dr. Cheng’s clarinet lessons are open to all levels. From nurturing passion for clarinet, establishing fundamental knowledge to fostering artistry and achieving artistic excellence. Also provides video/audio editing for each student after they accomplish ...',

                        content: [
                            'Dr. Cheng’s clarinet lessons are open to all levels. From nurturing passion for clarinet, establishing fundamental knowledge to fostering artistry and achieving artistic excellence. ',
                            'Dr. Cheng provides video/audio editing for each student after they accomplish the assigned pieces. A virtual studio concert will be held annually at the end of the year.',
                            'My primary goal as a musician and enthusiastic educator is to motivate my students to become lifelong, self-directed and effective learners, nurture their passion for clarinet and help them to achieve artistic excellence. This goal is achieved by encouraging students at every level to set clear short-term and long-term goals, combining these goals with efficient practice time and effective practice methods to form a holistic system of musicianship.',
                            'Clarinet is often referred as the closest instrument to the human voice, due to its unique tonality and range; therefore, from my perspective, I insist it is imperative for my students to “sing” through the clarinet as if they are vocalists and to develop their feeling and listening sensations in order to cultivate a natural sense of musical singing, breathing, articulation, stylistic choices and phrasing, rather than focusing on merely playing correct notes.  In addition to fostering artistry and strong musical style, I expect every student to focus on the fundamental aspects of playing that lead to the development of a rich and beautiful tone quality, including sound production, breath support, voicing, embouchure, intonation and reed adjustment. As for enhancing technique, I provide effective practice strategies for my students, such as problem-solving skills, time management, persistence and creative thinking. In this way, my students are able to overcome technical challenges with efficiency and confidence.',
                            'I believe that giving students opportunities to explore the artistry of the clarinet and encouraging them to collaborate and innovate have a profound influence on their growth as musicians. Regular studio classes, master classes and studio recitals stimulate motivation and allow for experience performing for an audience. Upon leaving my studio as graduates, my students will have all the tools necessary for comprehensive musicianship and the continued success through their careers.',
                        ]
                    },
                    {
                        id:'12',
                        name:'Classical Accordion',
                        videoId: '',
                        teacher: [
                            {
                                id:'1',
                                name:'Hanzhi Wang',
                                introduction: '<p>HANZHI WANG, accordion</p>\n' +
                                    '<p>Praised for her captivating stage presence and performances that are technically\n' +
                                    'and musically masterful, the groundbreaking musician Hanzhi Wang is the only\n' +
                                    'accordionist to ever win a place on the roster of Young Concert Artists in its 60-\n' +
                                    'year history. </p>\n' +
                                    '<p>Other firsts include being named Musical America “New Artist of the Month,” an\n' +
                                    'interview and performance on the 2,145 th episode of New York WQXR’s Young\n' +
                                    'Artists Showcase as the first solo accordionist on the program, and the Naxos\n' +
                                    'label’s first-ever solo accordion CD, Ms. Wang’s "On the Path to H.C. Andersen,\n' +
                                    'which was nominated for the prestigious DR (Danish Radio) P2 Prize in 2019.\n' +
                                    'First Prize Winner of the 2017 Young Concert Artists International Auditions, Ms.\n' +
                                    'Wang’s debut opened the 2018-19 YCA Series in New York in The Peter Marino\n' +
                                    'Concert at Zankel Hall at Carnegie Hall, and her Washington, DC debut opened\n' +
                                    'the 40 th Anniversary Young Concert Artists Series at the Kennedy Center, co-\n' +
                                    'presented with Washington Performing Arts. </p>\n' +
                                    '<p>Ms. Wang was awarded YCA performance prizes with the Candlelight Concert\n' +
                                    'Society in Columbia, MD; the Sinfonia Gulf Coast in Destin, FL; the Tri-I Noon\n' +
                                    'Recitals at Rockefeller University in New York City; the Vancouver Recital\n' +
                                    'Society; Tannery Pond Concerts (NY), the Usedom (Germany) Festival; the\n' +
                                    'Chamber Orchestra of the Triangle (NC); the University of Florida Performing\n' +
                                    'Arts Prize; and at the Krannert Center at the University of Illinois in Urbana.\n' +
                                    'Additional engagements include appearances for IRIS Orchestra in Tennessee,\n' +
                                    'Bravo! Vail Music Festival. </p>\n' +
                                    '<p>Ms. Wang won First Prize in the 40th Castelfidardo International Accordion\n' +
                                    'Competition in Italy, First Prize in Arraste International Accordion Competition\n' +
                                    'in Spain and many more international prizes. She inspires the next generation of\n' +
                                    'accordionists with lectures, performances and master classes, at the Manhattan\n' +
                                    'School of Music, Ghent Music Conservatory (Belgium), Royal Danish Academy\n' +
                                    'of Music, University of California Santa Barbara, Columbia University, The\n' +
                                    'University of Memphis, and music festivals included Bravo! Vail music festival,\n' +
                                    'Nordaccordion Festival in Norway among many others. Composers Martin\n' +
                                    'Lohse, Katherine Balch, Jesper Koch and many more have written and dedicated\n' +
                                    'works to her. </p>\n' +
                                    '<p>Ms. Wang completed her Soloist Diploma at the Royal Danish Academy of Music\n' +
                                    'in Copenhagen, and now serves as an assistant professor at the Academy.</p>\n',
                                avator: ''
                            },
                        ],
                        url: 'https://mayflower.s3.amazonaws.com/Accordion.png',
                        summary: 'Ms. Wang’s classical accordion lessons are open to all levels.',

                        content: [
                            'Ms. Wang’s classical accordion lessons are open to all levels. As Assistant\n' +
                            'Professor, she currently teaches at the Royal Danish Academy of Music in\n' +
                            'Copenhagen, and furthermore she is the only accordionist who ever won a place in\n' +
                            'the roster at Young Concert Artists during its 60 years history. Ms. Wang’s classical\n' +
                            'accordion educational programs and masterclasses takes place all around world.',
                            'The classical accordion is considered to be a modern instrument, with a huge\n' +
                            'potential of musical expressiveness. The very first accordion model was invented in\n' +
                            '1829 in Europe, and after some decades the classical accordion was born. In many\n' +
                            'countries the accordion is no longer only associated with traditional folk music, but\n' +
                            'also became very popular amongst prominent contemporary composers, such as\n' +
                            'Sofia Gubaidulina, Magnus Lindberg, Toshio Hosakawa and many more.',
                            'There are two main kinds of classical accordion, which is visible distinguished by\n' +
                            'their different keyboards in the right-hand side: button accordions and piano\n' +
                            'accordions. All accordions have a button keyboard on the left-hand side for bass\n' +
                            'chords, and single tones by pressing the converter switch. The invisible 2 systems in\n' +
                            'the left-hand side gives a lot of possibilities to perform various music throughout\n' +
                            'Baroque to contemporary music. And the bellows which connects the right-hand side\n' +
                            'to the left-hand side, can be considered as the “soul” or the “lung” of the instrument,\n' +
                            'it brings dynamics and breathing in the music by controlling the bellows. The\n' +
                            'registers in both hand sides expand the different timbres and octaves, and makes\n' +
                            'the accordion sound like a small orchestra.',
                            'The opportunity to explore the classical accordion is a special and unique\n' +
                            'experience. From the beginning level to advanced artistic excellence, students will\n' +
                            'get the individual guidance and acknowledge of the professional academic level. For\n' +
                            'the beginning level students, the course will guide them through the goals of correct\n' +
                            'fingering, clear articulations, beautiful sound producing by turning the bellows. This is\n' +
                            'mainly achieved by the original teaching books which is a collaboration between Ms.\n' +
                            'Wang, the record compony Da Capo and the Educate·S publisher in Denmark. In\n' +
                            'addition to this, the course will include transcriptions from different periods of the\n' +
                            'music history. For the intermediate level students, the course will include more\n' +
                            'contemporary and original works written for the classical accordion, mainly from\n' +
                            'European composers. And in addition to this, students will be involved with chamber\n' +
                            'music works and collaborate with other musicians. For the advanced level students,\n' +
                            'the main focus will be to perform and prepare for concert possibilities with solo,\n' +
                            'chamber and concerto at festivals and concerts in Europe and US. Every student\n' +
                            'who has involved in the classical accordion will be given the possibility to participate\n' +
                            'and get introduced to the Nordaccordion Music Festival in Norway, which is\n' +
                            'considered to be one of the most important accordion festivals in the world,\n' +
                            'introducing world class lecturers and concerts.',
                            'The aim of the classical accordion course, is to establish the musicality and creativity\n' +
                            'into daily music learning, as well as making music on this modern instrument by your\n' +
                            'own music language and cultivating the life-long interest to play music.'

                        ]
                    },
                ]
            },
            teacher: [
                {
                    id:'1',
                    name:'Yiming Wu',
                    introduction: '<p>Yiming Wu, composer, music educator, the founder of the May Flower Art Center. Mr. Wu graduated from the Composition Department of the Central Conservatory of Music, China, where he studied composing with Professor Zhenmin Xu, Changjun Xu and Liqiang Dong. He has also studied composing with Professor Michael Hersch who is the Director of Composition Department and Rome Prize winner, at Peabody Institute of Johns Hopkins University conservatory. In 2006, he was the first Chinese to participate in the three-pipe symphony and won the third prize of Takemistsu Composition Award in Japan at the age of 23. In 2008, he won second place in the third Harelbeke International Composition Competition in Belgium. In 2010, He was the recipient of the BMW Musica Viva Composition Prize in Germany. Yiming Wu\'s original concert music has been performed worldwide by notable orchestras such as the Tokyo Philharmonic Orchestra, the Bavarian Radio Symphony Orchestra, Beijing Symphony Orchestra, Belgium Royal Wind Orchestra, etc. </p>\n' +
                        '\n' +
                        '<p>His family immigrated to Maryland in 2017, where he founded the May Flower Art Center. He has developed a unique teaching method for composition, and actively cultivates creative talents for the local. Mr. Wu Yiming has always advocated "using amateur learning to reach a professional level". In three years, through his dedicated guidance and the hard work of the students, from 2019 to April 2021, nearly 30 students won more than 130 important awards in national and international competitions. Some competitions are the top American or international composition competitions, such as the American Prize and Sibelius International Composition Competition; some competitions are organized by the government (such as the Austrian Chancellery, the Ministry of Culture of Kazakhstan); some competitions are organized by famous music schools Organized (such as: Franz Schubert Music Conservatory, Vienna Conservatory); some competitions are organized by famous symphony orchestras (such as: National Youth Orchestra in USA, the New Vienna Symphony in Austria); and some competitions are organized by American music organizations ( Such as: The American Composers Forum, Nation Parent Teacher Association). </p>\n' +
                        '\n' +
                        '<p>Many competitions are professional competitions with no age limit. Participants are teachers from the Conservatory of Music, students from the Composition Department of the Conservatory, and professional composers. The students at The May Flower Art Center are only elementary, junior and high school students aged 9 to 17 who are amateurs of composition study. Nevertheless, in some competitions, the number of winners of The May Flower Art Center has exceeded that of professional conservatories. </p>\n' +
                        '\n' +
                        '<p>In September 2020, The May Flower Art Center established an online school. In addition to composition classes, other courses were added, such as: Western music history, music theory, and instrument performance, etc. </p>\n' +
                        '\n' +
                        '<p>In 2021, many well-known musicians and professors from conservatories have joined The May Flower Art Center. The school website was officially launched in April 2021. We are opening for music lovers all over the world.</p>\n'+
                        '<a href="wuyiming.org">wuyiming.org</a>',
                    avator:'https://mayflower.s3.amazonaws.com/YimingW.jpg',
                },
                {
                    id:'2',
                    name:'Meng Wang',
                    introduction: '<p>Wang Meng is a Chinese composer currently based in Cincinnati. Her music has been performed internationally by notable orchestras and ensembles, including Brussels Philharmonic, Cincinnati Symphony Orchestra, Columbus Symphony, Jacksonville Symphony, MSM Composer’s Orchestra, China Youth Symphony; Aspen Contemporary Ensemble, Thin Edge New Music Collective, Longleash Trio, F- Plus Ensemble, among others.</p>\n' +
                        ' \n' +
                        '<p>Wang was a composer fellow at Aspen Music Festival, Cabrillo Music Festival and was selected to participate in 2019 [\'tactus] Young Composers Forum with Brussels Philharmonic and American Composers Orchestra EarShot readings in 2018. Recent commissions include a percussion ensemble piece for Shanghai Symphony in Chamber Concert series and a piano concerto for CCM Concert Orchestra.</p>\n' +
                        '\n' +
                        ' \n' +
                        '<p>Wang is currently pursuing her DMA in composition at University of Cincinnati as a student of Prof. Douglas Knehans. She is an alumnus of Central Conservatory and Manhattan School of Music, where she held the Deolus W. Husband Scholarship for Composition in 2015-2017. Her primary instructors include composers Wenchen Qin, Reiko Füting. She also received instructions from composer Andreia Pinto Correia.</p>\n',
                    avator: 'https://mayflower.s3.amazonaws.com/WangM.jpg'
                },
                {
                    id:'3',
                    name:'Shenying Qian',
                    introduction: '<p>QIAN Shen-Ying, (Chinese Composer) born in Nantong/Jiangsu Province. </p>\n' +
                        '\n' +
                        '<p>He studied composition at Geneva University of Music (with Michael Jarrell) and Shanghai Conservatory of Music (with ZHU Shi-Rui). From 2010 to 2015, he held a teaching position at the Nanjing Arts University. Since 2015, He becomes faculty member of Composition Department of Shanghai Conservatory of Music where he teaches Composition, Contemporary music analysis and Harmony. </p>\n' +
                        '\n' +
                        '<p>His music is influenced deeply by natural phenomenon and eastern philosophy, drawing its inspiration from the expression structure in literature, visual arts and architecture, pursuing the reflection on the duality and the contradiction in his sound organizing process. </p>\n' +
                        '\n' +
                        '<p>He has received many world prestigious prizes and awards, among them: Grand Prize at the 14th “Alfredo Casella” International Composition Competition of Siena, Italy for string quartet Ode to Cicada - Reflection in Zen [Yong Chan - Si Chan]；Grand Prize at the 12th “George Enescu” International Composition Competition (Chamber Music Section) of Bucharest, Romania for piano trio Invocation of Wind and Thunder [Feng Lei Yin]；Finalist Prize (Top 4) at the 2008“Queen Elisabeth” International Composition Competition of Brussels, Belgium for violin concerto In search of childhood carried away as dandelion. Some of his scores have been published by CASA RICORDI and SMPH (Shanghai Music Publishing House). </p>\n' +
                        '\n' +
                        '<p>His composition has been performed in many countries by performers including Hessischer Rundfunk Sinfonieorchester (Frankfurt Radio Symphony Orchestra), Suzhou Symphony Orchestra, Shanghai Philharmonic, l’Orchestre National de Lorraine, Ensemble Modern, Ensemble Contrechamps, l’Orchestre de Chambre de Genève, Hongkong New Music Ensemble, Ensemble XX.Jahrhundert Vienna, Plural Ensemble, Quartetto di Cremona etc. </p>\n',
                    avator: 'https://mayflower.s3.amazonaws.com/ShenyingQ.jpg'
                }
            ],
            honor:{
                breadcrumb:['Home','Honors'],
            },
            foundation:{
                breadcrumb:['Home','Foundation'],
                content:'<h5>Mayflower Art Foundation</h5>\n' +
                    '<p>Mayflower Art Foundation is a 501(c)(3) non-profit organization founded by Mayflower Art Center. The Foundation aims to cultivate the growth of youths in music and promote cultural enrichment, by organizing showcase and cultural exchange concerts, seminars with masters in the fields, and providing scholarships and financial awards to outstanding students of the Mayflower Art Center. Showcase concerts for Mayflower Art Center students feature pieces performed by professional musicians and written by students who have won awards in national and international composition competitions. Students gain opportunities of having live-audience performance experience and enriching the resumes with practical experiences. Mayflower Art Foundation invites prominent young composers in the world to compose and hosts concerts to debut the works in the US. These premier shows provide rich immersions in music and culture that enhance exploration in composition innovations and advance prosperity of music in the world. Seminars with masters offer opportunities for Mayflower Art Center students and the general public to hear the music of preeminent composers and musicians. Accomplished musicians share their music appreciation, composition techniques, and performance experiences that elevate students’ visions and inspire the community. The Foundation provides scholarships and financial awards funded by Mayflower Art Center, parents and the general public, to students who are outstanding in music composition. </p>\n' +
                    '\n' +
                    '<p>The source of funds for The May Flower Art Foundation is from: The May Flower Art Center, donations from parents of students at The May Flower Art Center, and public donations. </p>\n'
            },
            musicProduction:{
                breadcrumb:['Home','Music Production'],
                content:'<h5>Music Production</h5>\n' +
                    '<p>The May Flower Art Center has a strong lineup of composers with international composing standards. With strong creative ability, the center has accumulated rich production experience in symphony, film and television music, musicals, personal/corporate songs and other music creation. The May Flower Art Center undertakes the production of all kinds of original music and the adaptation of music works, sharing high-quality, international music works with more audiences around the world.</p>'
            },
            oversea:{
                breadcrumb:['Home','Overseas Music Education Agency'],
                content:'<h5>Overseas Music Education Agency</h5>\n' +
                    '<p>The May Flower Art Center has information on international education and admission skills of top American conservatories, the programs will be specifically tailored for dual majors in the composition department of Ivy League schools. Different from traditional agencies, our team has graduated from top overseas universities, which can give students the most professional music education and career planning; we also have close connections with professors of various top schools, utilize the advantage of localization, and have valuable recommendation and admission resources. </p>'
            },
            contact:{
                breadcrumb:['Home','Contact']
            },
            news:{
                content:[
                    {
                        id:'1',
                        title:'Nicole Liang’s String Quartet, Won First Prize in the Junior Composers Contest in Maryland',
                        date:'3/8/2021',
                        summary:'The May Flower Art Center student Nicole Liang, won the first prize in the National Federation of Music Clubs Composition Competition in Maryland, and will be sent to participate the national competition in the Eastern Coast of the United States, as the only representative of Maryland. Congratulations!',
                        content:{
                            text: '<p>The May Flower Art Center student Nicole Liang, won the first prize in the National Federation of Music Clubs Composition Competition in Maryland, and will be sent to participate in the national competition in the Eastern Coast of the United States, as the only representative of Maryland. Congratulations! </p>\n' +
                                '<p>There were more than 700 people participating in this competition in the United States in 2020. The state champions will be selected in each state, who will therefore have a chance to participate and win the top three prizes of the national competition. This is a very competitive competition. Hereon, The May Flower Art Center wishes Nicole Liang good luck on winning a national prize, and hopes that more students from the Art Center will win state championships next year, as well as the national prizes. </p>\n'
                            ,
                            image:'https://mayflower.s3.amazonaws.com/news3.jpg',
                        }
                    },
                    {
                        id:'2',
                        title:'David Lu, Nicole Liang, are Nominated for the Semifinals of the Most Authoritative American Prize in the United States, with their Chamber Works.',
                        date:'3/5/2021',
                        summary:'Congratulations!!! The chamber music works of David Lu and Nicole Liang, two students from The May Flower Art Center, were nominated for the semifinals of the most authoritative American Prize in the United States. ',
                        content:{
                            text:'<p>Congratulations!!! The chamber music works of David Lu and Nicole Liang, two students from The May Flower Art Center, were nominated for the semifinals of the most authoritative American Prize in the United States. Both of them are tenth-grade high school students. Most of the other contestants in the chamber music semifinals are PhDs in composition, and many of the finalists in the professional group are already professors at well-known universities and conservatories.</p>\n' +
                                '\n' +
                                '<p>The American Prize is the most authoritative music award in the United States, which includes all the instruments and vocals. The musicians who can get the American Prize in high school are the most excellent young musicians in the United States. This award also established a solid foundation for David Lu and Nicole Liang to enter the Ivy League in the future. Both of these students are from Howard County, Maryland, where they are studying composition under the guidance of Yiming Wu. Congratulations again! </p>\n' +
                                '\n' +
                                '<p>Official Website of the winning results: <a>http://theamericanprize.blogspot.com/2021/02/semi-finalists-composers-instrumental.html?m=1</a></p>\n'
                        }
                    },
                    {
                        id:'3',
                        title:'Lucy Chen, Jenny Yu, Austine Zhang, Won The  23rd Annual Young Composer Competition at Tribeca New Music',
                        date:'2/22/2021',
                        summary:'Tribeca New Music announced the results of the 23rd Annual Young Composer Competition.  Lucy Chen, Jenny Yu, Austine Zhang, students of The May Flower Art Center won the Emerging Composer Award!\n',
                        content:{
                            text:'<p>Tribeca New Music announced the results of the 23rd Annual Young Composer Competition.  Lucy Chen, Jenny Yu, Austine Zhang, students of The May Flower Art Center won the Emerging Composer Award! </p>\n' +
                                '\n' +
                                '<p>This competition is a national composition competition held in New York. The first prize winner from last year was an undergraduate student from The Juilliard School, under the guidance of Robert Beaser, the Composition department chair of The Juilliard School. This year, the first prize winner is an undergraduate of Indiana University Jacobs School of Music, studying with the head of the composition department David Dzubay. </p>\n' +
                                '\n' +
                                '<p>Emily Bai from The May Flower Art Center won the Emerging Composer Award last year. This year, nearly 300 people participated in the competition nationwide, in which a total of 27 people won prizes. Out of the 27 prizewinners, 3 were from The May Flower Art Center, which is one-ninth of the total national prizewinners. Congratulations! Among these three participants, Austin Zhang is an 11th grader, Lucy Chen is in 10th grade, and Jenny Yu is only 8 years old. The average period of compositional study is only one year. </p>\n' +
                                '\n' +
                                '<p>Competing on the same stage with professional musicians from the world-class music institutes will help improve the overall level of our Art Center students. Congratulations again to the winners! </p>\n' +
                                '\n' +
                                '<p>Official Website of the winning results: https://www.tribecanewmusic.org/2020-division-2-results</p>\n'
                        }
                    },
                    {
                        id:'4',
                        title:'2021 Golden Key International Composition Competition was announced, May Flower Art Center won 23 awards',
                        date:'1/7/2021',
                        summary:'In the recent announced 2021 Golden Key International Composition Competition, 22 students from May Flower Art Center have won 23 awards in total.',
                        content: {
                            text: '<p>In the recently announced 2021 Golden Key International Composition Competition, 22 students from May Flower Art Center have won 23 awards in total. Among these students, Melinda Meihua Liu, a student of Ms. Meng Wang, has won first place in the Elementary National group, whose another student Andrew Liu has won the honorary award in the Senior National group. </p>\n' +
                                '\n' +
                                '<p>Ms. Meng Wang joined May Flower Art Center in 2020 and she is the teaching supervisor of the Art Center, where she also teaches music theory and composition classes. Congratulations to Ms. Meng Wang and all the winners! </p>\n' +
                                '\n' +
                                '<p>Official website of the winning results: Award announcement website address: www.goldenkeyfestival.com/winners-2021/</p>\n' +
                                '\n'
                            ,
                            formData: {
                                header:['#', 'Category','Name','Winning Place',	'Instructor'],
                                content:[
                                    {
                                        "id": 1,
                                        "category": "Elementary International",
                                        "name": "Aria Song",
                                        "place": "Third",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 2,
                                        "category": "Elementary National",
                                        "name": "Melinda Meihua Liu",
                                        "place": "First",
                                        "instructor": "Meng Wang"
                                    },
                                    {
                                        "id": 3,
                                        "category": "",
                                        "name": "Joanna Qian Mo",
                                        "place": "Third",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 4,
                                        "category": "",
                                        "name": "Jenny Yu",
                                        "place": "Fourth",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 5,
                                        "category": "Junior International",
                                        "name": "Li Yixuan",
                                        "place": "Fourth",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 6,
                                        "category": "",
                                        "name": "Emily Bai",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 7,
                                        "category": "",
                                        "name": "Julia Wang Lu",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 8,
                                        "category": "Junior National",
                                        "name": "Qingyang Zhang",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 9,
                                        "category": "",
                                        "name": "Charles Chen",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 10,
                                        "category": "",
                                        "name": "Albert Lu",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 11,
                                        "category": "Senior International",
                                        "name": "David Li",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 12,
                                        "category": "",
                                        "name": "Yihong Song",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 13,
                                        "category": "",
                                        "name": "Qingran Li",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 14,
                                        "category": "",
                                        "name": "Austin Zhang",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 15,
                                        "category": "",
                                        "name": "Ammy Yuan",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 16,
                                        "category": "Senior National",
                                        "name": "David Lu Wang",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 17,
                                        "category": "",
                                        "name": "Lucy Liu Chen",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 18,
                                        "category": "",
                                        "name": "Taohan Wang",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 19,
                                        "category": "",
                                        "name": "Sean Wang",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 20,
                                        "category": "",
                                        "name": "Cassi Chen",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 21,
                                        "category": "",
                                        "name": "Ammy Yuan",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 22,
                                        "category": "",
                                        "name": "Grace Ma",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 23,
                                        "category": "",
                                        "name": "Andrew Liu",
                                        "place": "Honorable Mention",
                                        "instructor": "Meng Wang"
                                    }
                                ]
                            }
                        }
                    },
                    {
                        id:'5',
                        title:'Lucy Chen, Grace Ma and Cassi Chen won the MYO Composers Orchestra Competition rewards',
                        date:'1/24/2021',
                        summary:'In the 2020-2021 Emerging Composers Competition organized by The Metropolitan Youth Orchestra of New York. There are six awards in this category, May Flower Art Center won three of them',
                        content:{
                            text: '<p>In the 2020-2021 Emerging Composers Competition organized by The Metropolitan Youth Orchestra of New York, Lucy Chen from Maryland won the second place in the youth category, Grace Ma and Cassie Chen received Honorable Mention. This is the top composition competition in the United States. Out of the six total awards in the youth category, May Flower Art Center won three of them. </p>\n' +
                                '<p>Last year, Max Lu, a student of May Flower Art Center won second place. The three students who won this award are all from Winston Churchill High School in Potomac, under the professional guidance of Yiming Wu. Their award-winning symphonic works will be premiered by The Metropolitan Youth Orchestra of New York at Carnegie Hall. Congratulations again!\n' +
                                'Award announcement website address: http://www.myo.org/myo-programs/emerging-composers-competition/</p>\n'

                        }
                    },
                    {
                        id:'6',
                        title:'Mayflower Art Center students won ten prizes in 2020 International JSFest Composition Competition',
                        date:'11/24/2020',
                        summary:'In the 2020 International JSFest Composition Competition. Almost all the participating students from the Mayflower Art Center have won prizes!',
                        content: {
                            text:'EN'
                        }
                    },
                    {
                        id:'7',
                        title:'The May Flower Art Center wins the top three awards in the CCPA National Young Composer Competition',
                        date:'2/4/2021',
                        summary:'The results of the CCPA National Young Composer Competition organized by Roosevelt University Chicago School of Music have just been announced. The students Lucy Chen, Cassi Chen, and Austin Zhang from May Flower Art Center won the top three awards',
                        content:{
                            text:'<p>The results of the CCPA National Young Composer Competition organized by Roosevelt University Chicago School of Music have just been announced. </p>\n' +
                                '<p>Students Lucy Chen, Cassi Chen, and Austin Zhang from May Flower Art Center won the top three awards, which covers all the awards. Among them, Lucy Chen and Cassi Chen are from Montgomery County, Maryland, and Austin Zhang is from Howard County, Maryland. With cash rewards offered, Lucy Chen\'s piece will have its performance on April 28th. The average time for the three students studying composition is about one year, under the instruction of Yiming Wu. Congratulations again!</p>\n'
                        }
                    },

                ],
                breadcrumb:['Home','News'],
            }
        }

    },
    'zh': {
        page:{
            language:'英',
            remind:'正在切换语言',
            home:{
                welcome: <h4 className="text-gradient">欢迎来到美好艺术中心</h4>,
                subtitle: <h1 className="text-gradient">BEST PART-TIME MUSIC SCHOOL</h1>,
                intro: <div> <p>美好艺术中心是一所创立于美国的音乐培训学校。以开发创意教学的理念，打破专业门户之见，打通业余成材通道，着力解决模仿力强、创造力不足的问题，引领学生“用业余的学习达到专业的水平”。</p>
                    <p>美好艺术中心的三大模块构成：音乐课程、音乐留学、音乐制作。</p>
                </div>,
                about: <header className="heading">
                    <h2 className="entry-title">关于我们</h2>
                    <div>
                        <p>美好艺术中心，坐落于美国马里兰州哈维郡。创办人吴羿明先生来自中国，是优秀的职业作曲家。</p>

                        <p>2017年，吴羿明先生全家从中国移民至马里兰州，创立了中美美好艺术中心。他研发出独到的作曲教学方法，为本地积极培养有创造天赋的作曲人才。</p>

                        <p>吴羿明先生一直倡导“用业余的学习达到专业的水平”。仅仅三年时间，通过他精心的指导和学生们的刻苦努力，从2019年至2021年4月，有近30名学生在全美、国际比赛中获得150多个重要奖项。有的比赛属于美国或国际顶级作曲比赛，如：American Prize、西贝柳斯国际作曲比赛；有的比赛由政府举办（如：奥地利总理府、哈萨克斯坦文化部）；有的比赛由著名音乐学院举办（如：舒伯特音乐学院、维也纳音乐学院）；有的比赛由著名交响乐团举办（如：National Youth Orchestra in USA，the New Vienna Symphony in Austria）；还有些比赛由美国的音乐组织举办（如：The American Composers Forum， Nation Parent Teacher Association）。</p>

                    </div>

                </header>,
                explore:<div>
                    <header className="entry-header">
                        <h2 className="entry-title">发现学校</h2>
                    </header>
                    <div className="entry-content">
                        <p>与国际化老师一起学习</p>
                    </div>
                </div>,
                outstanding:<div>
                    <header className="entry-header">
                        <h2 className="entry-title">杰出学子</h2>
                    </header>{/* .entry-header */}
                    <div className="entry-content">
                        <p>Expect more in the future</p>
                    </div>{/* .entry-content */}
                </div>,
                foundation:<div>
                    <header className="entry-header">
                        <h2 className="entry-title">艺术基金</h2>
                    </header>{/* .entry-header */}
                    <div className="entry-content">
                        <p>Expect more in the future</p>
                    </div>{/* .entry-content */}
                </div>,
                news:<div>
                    <header className="entry-header">
                        <h2 className="entry-title">新闻荣誉</h2>
                    </header>{/* .entry-header */}
                    <div className="entry-content">
                        <p>Check out the latest music news around the world</p>
                    </div>{/* .entry-content */}
                </div>
            },
            pageHeader:{
                home:'主页',
                program:'项目介绍',
                course:'课程介绍',
                introduction:'关于我们',
                honor:'荣誉',
                foundation: '艺术基金',
                news:'新闻',
                contact:'联系我们',
                musicProduction:'音乐制作',
                oversea:'音乐留学'
            },

            introduction:{
                breadcrumb:['主页','关于我们'],
                title:'',
                summary:'美好艺术中心，坐落于马里兰州哈维郡。它的创办人吴羿明先生，来自中国，是位优秀的职业作曲家。',
                content:<div>
                    <p>美好艺术中心，坐落于美国马里兰州哈维郡。创办人吴羿明先生来自中国，是优秀的职业作曲家。</p>

                    <p>2017年，吴羿明先生全家从中国移民至马里兰州，创立了中美美好艺术中心。他研发出独到的作曲教学方法，为本地积极培养有创造天赋的作曲人才。</p>

                    <p>吴羿明先生一直倡导“用业余的学习达到专业的水平”。仅仅三年时间，通过他精心的指导和学生们的刻苦努力，从2019年至2021年4月，有近30名学生在全美、国际比赛中获得150多个重要奖项。有的比赛属于美国或国际顶级作曲比赛，如：American Prize、西贝柳斯国际作曲比赛；有的比赛由政府举办（如：奥地利总理府、哈萨克斯坦文化部）；有的比赛由著名音乐学院举办（如：舒伯特音乐学院、维也纳音乐学院）；有的比赛由著名交响乐团举办（如：National Youth Orchestra in USA，the New Vienna Symphony in Austria）；还有些比赛由美国的音乐组织举办（如：The American Composers Forum， Nation Parent Teacher Association）。</p>

                    <p>很多比赛是没有年龄限制的专业比赛，参赛选手是音乐学院老师、音乐学院作曲系的学生、以及职业作曲家。而美好艺术中心的学生只是年龄9至17岁，课余学习作曲的小学、初中、高中生。尽管如此，在一些比赛里，美好艺术中心的获奖人数已经超过了音乐院校。</p>

                    <p>吴羿明先生说：得奖不是目的，而是通过得奖来提升孩子们的自信、眼界和创造力，帮助他们改变命运，为他们进入藤校读取双专业，打下坚实基础。美好中心的学员Max Lu，在获得多项全美、国际顶尖作曲比赛大奖后，2020年已经成功地被哥伦比亚大学录取。2021年，又有2名学员分别被世界顶级音乐学院伯克利音乐学院和伊斯曼音乐学院录取。</p>

                    <p>美好艺术中心创办以来，从最初的2名学生到现在拥有学生30多人。学生年龄从5岁到17岁，学生的所在地域，从最初的马里兰州，扩展到了弗吉尼亚州、华盛顿DC、纽约、德克萨斯州、新加坡、中国等。</p>

                    <p>2020年9月，美好艺术中心成立了网上学校，除作曲课之外，增加了西方音乐史、音乐理论、乐器演奏等课程。</p>

                    <p>2021年，美好艺术中心吸引了多位知名音乐家及音乐院校的教授加入，学校网站在2021年4月正式上线，招生范围面向全世界的音乐爱好者。</p>
                    <p>目前，美好艺术中心的业务主要由三大模块构成：音乐课程、音乐留学、音乐制作。</p>

                    <p>1、音乐课程：提供作曲、乐理、视唱练耳、西方音乐史、声乐、钢琴、小提琴/中提琴、巴松管、古筝和琵琶等。这些课程由本中心根据美国大学通用课程（含大学预备课程）而独家研发，进行系统、专业的学习。</p>
                    <p>2、音乐留学：是美好艺术中心旗下自创专注全球音乐留学及名校申请服务的品牌，深耕于美国高端教育领域，帮助学生利用音乐学习的优势，最终踏进顶尖名校。</p>

                    <p>3、音乐制作：美好艺术中心旗下拥有国际级作曲水准的中美青年作曲家近五十人，具备雄厚的音乐创作能力。</p>

                </div>,
                about: <div>
                    <h2 className="entry-title">About Our School</h2>
                    <p>美好艺术中心是一所创立于美国的音乐培训学校。以开发创意教学的理念，打破专业门户之见，打通业余成材通道，着力解决模仿力强、创造力不足的问题，引领学生“用业余的学习达到专业的水平”。</p>
                    <p>美好艺术中心的三大模块构成：音乐课程、音乐留学、音乐制作。</p>
                </div>,
                teacher:[
                    {
                        id:'1',
                        position:'创始人',
                        name:'吴羿明',
                        avator:'https://mayflower.s3.amazonaws.com/YimingW.jpg'

                    },
                    {
                        id:'2',
                        position:'教务主任',
                        name:'王萌',
                        avator:'https://mayflower.s3.amazonaws.com/WangM.jpg'

                    },
                    {
                        id:'3',
                        position:'顾问',
                        name:'钱慎瀛',
                        avator:'https://mayflower.s3.amazonaws.com/ShenyingQ.jpg'

                    },
                ]
            },
            courses:{
                breadcrumb:['主页','课程'],
                content:[
                    {
                        id:'1',
                        name:'作曲',
                        videoId:'',
                        teacher: [
                            {
                                id:'1',
                                name:'吴羿明',
                                introduction: '<p>吴羿明，自由作曲家，音乐教学家，中美美好艺术中心创办人。</p>\n' +
                                    '<p>毕业于中国中央音乐学院作曲系（师从于徐振民、徐昌俊、董立强）、美国约翰•霍普金斯大学皮博迪音乐学院（师从于作曲系主任、罗马大奖获得者 Michael Hersch先生）。</p>\n' +
                                    '<p>获奖经历：</p>\n' +
                                    '<p>2006年，23岁首次由中国人参赛三管编制交响乐获日本武满彻国际作曲比赛三等奖；</p>\n' +
                                    '<p>2008年获得比利时第三届赫尔贝克国际作曲比赛第二名；</p>\n' +
                                    '<p>2010年获得德国巴伐利亚广播交响乐团宝马国际作曲奖。</p>\n' +
                                    '<p>吴羿明原创音乐作品在东京爱乐乐团、比利时皇家管乐团、巴伐利亚广播交响乐团、北京交响乐团、美国Occasional Symphony交响乐团等全球演出。</p>\n' +
                                    '<p>2017年吴羿明先生定居美国马里兰州，创立了美好艺术中心，以创意教学和文化交流培养年轻的音乐人才。 吴羿明先生一直倡导“用业余的学习达到专业的水平”。仅仅三年时间，通过他精心指导和学生们的刻苦努力，从2019年至2021年4月，有近30名学生在全美、国际比赛中获得130多个重要奖项。有的比赛属于美国或国际顶级作曲比赛，如：American Prize、西贝柳斯国际作曲比赛；有的比赛由政府举办（如：奥地利总理府、哈萨克斯坦文化部）；有的比赛由著名音乐学院举办（如：舒伯特音乐学院、维也纳音乐学院）；有的比赛由著名交响乐团举办（如：National Youth Orchestra in USA，the New Vienna Symphony in Austria）；还有些比赛由美国的音乐组织举办（如：The American Composers Forum， Nation Parent Teacher Association）</p>\n' +
                                    '<p>很多比赛是没有年龄限制的专业比赛，参赛选手是音乐学院老师、音乐学院作曲系的学生、以及职业作曲家。而美好艺术中心的学生只是年龄8至17岁，课余学习作曲的小学、初中、高中生。尽管如此，在一些比赛里，美好艺术中心的获奖人数已经超过了音乐院校。</p>\n' +
                                    '<p>2020年9月，美好艺术中心成立了网上音乐学校，同时也成立了美好艺术基金。</p>\n' +
                                    '<p>2021年，美好艺术中心吸引了中美多位知名音乐家及音乐院校的教授加入。除作曲课之外，增加了西方音乐史、音乐理论、视唱练耳、乐器演奏等课程。学校网站在2021年4月正式上线，招生范围面向全世界的音乐爱好者。</p>\n' +
                                    '<a href="wuyiming.org">wuyiming.org</a>'
                                ,
                                avator:'https://mayflower.s3.amazonaws.com/YimingW.jpg',
                            },
                            {
                                id:'2',
                                name:'王萌',
                                introduction: '<p>青年作曲家王萌毕业于中央音乐学院, 美国曼哈顿音乐学院, 现为辛辛那提大学音乐学院博士候选人。她的 作品曾在北美，欧洲，亚洲等多个重要场馆演出过，合作过的乐团包括美国辛辛那提交响乐团, 哥伦布交响乐团, 佛罗里达州Jacksonville交响乐团, 比利时布鲁塞尔爱乐，MSM作曲家管弦乐团, 上海交响乐团打击乐组，阿斯本当代乐团, Longleash 三重奏, F-Plus 当代室内乐团及加拿大 Thin Edge 新音乐团等。此外, 她的音乐还出现在国际一流的音乐节中,包括美国 Aspen 音乐节, Cabrillo 音乐节，Bowdoin 国际音乐节,比利时TACTUS 国际青年作曲家论坛，美国作曲家乐团 EarShot Reading, 美国中西部作曲家研讨会及北京现代音乐节等。最近的委约包括为ccm concert orchestra 创作的钢琴协奏曲，将于2022年3月首演。</p>',
                                avator: 'https://mayflower.s3.amazonaws.com/WangM.jpg'
                            },
                            {
                                id:'3',
                                name:'代博',
                                introduction: '<p>青年作曲家/钢琴家/羽管键琴家</p>\n' +
                                    '<p>作曲博士</p>\n' +
                                    '<p>中央音乐学院作曲系教师</p>\n' +
                                    '<p>【主要影视音乐作品】</p>\n' +
                                    '<p>十集纪录片《影响世界的中国植物》2019</p>\n' +
                                    '<p>央视纪录片《永恒的微笑》2019</p>\n' +
                                    '<p>【主要演出】</p>\n' +
                                    '<p>2016年北京/代博钢琴和羽管键琴独奏音乐会</p>\n' +
                                    '<p>2016年北京/代博与波兰新四重奏团现代音乐专场音乐会</p>\n' +
                                    '<p>2017年1月纽约/代博个人作品专场音乐会</p>\n' +
                                    '<p>2017年11月墨西哥莫雷利亚/代博个人钢琴独奏专场音乐会</p>\n' +
                                    '<p>2018年3月北京/与巴赫时光旅行—代博羽管键琴与钢琴音乐会</p>\n' +
                                    '<p>2018年5月北京/代博个人室内乐作品专场音乐会</p>\n' +
                                    '<p>2019年8月墨西哥城/代博羽管键琴独奏专场音乐会</p>\n' +
                                    '<p>【主要出版物】</p>\n' +
                                    '<p>2019年，由波兰DUX唱片出版《囚徒的子宫》。</p>\n' +
                                    '<p>2016年，与大提琴家娜木拉合作出版的大提琴专辑《古佳耶》。</p>\n' +
                                    '<p>2007年，与小提琴家柴亮合作出版的小提琴专辑《重逢有日》、《映山红》。</p>\n' +
                                    '<p>2016年11月，受波兰使馆文化处委约，为显克维奇长篇历史小说《火与剑》语音书创作配乐《火与剑》语音书。</p>\n' +
                                    '<p>2019年1月，钢琴套曲《消失的风景》及钢琴作品《秋》、《醉京风》收录于库克音乐“中国当代作曲家系列”专辑《钢琴大赋格》中。</p>\n' +
                                    '<p>【主要获奖】</p>\n' +
                                    '<p>乐队作品《看不见的山》获2014贝多芬协会国际作曲比赛第二名。\n' +
                                    '《醉京风》、《暴雨将至》分别获2009年全国“金杯”手风琴新作品比赛‘独奏组’一等奖及‘室内乐组’一等奖。其中，《醉京风》被选为2010哈尔滨国际手风琴比赛 “演奏家组”的规定曲目, 并参演立陶宛国际音乐节。</p>\n' +
                                    '<p>《庄子梦蝶》获2010年北京现代音乐节“国际青年作曲家发展计划”奖。\n' +
                                    '《空谷幽兰》获“帕拉天奴”小提琴作品比赛二等奖，并入选香港The Intimacy of Creativity2013，与小提琴家林昭亮先生在香港大会堂演出。</p>\n' +
                                    '<p>【业界评价】</p>\n' +
                                    '<p>作曲大师潘德列茨基先生称代博为“最有才华的中国青年作曲家之一”。 \n' +
                                    '亚洲协会全球表演艺术总监Rachel Copper称，“代博有着令人难以置信的创作才能，可以比肩任何伟大的作曲家。他精通历史与哲学，并融汇东西方，好像能从他的音乐里听到宇宙星系。而这并不是大多数人做音乐的方式。”</p>\n',
                                avator: 'https://mayflower.s3.amazonaws.com/Bodai.jpg'
                            },
                            {
                                id:'4',
                                name:'依克山',
                                introduction: '<p>依克山·阿不都沙拉木（1985-，中国），维吾尔族，出生于新疆乌鲁木齐。</p>\n' +
                                    '<p>2008年至2013年，依克山先后师从上海音乐学院作曲系赵光教授和朱世瑞教授，获本科学士学位。 </p>\n' +
                                    '<p>2012年至2013年，依克山作为校际交换生被上音选派赴瑞士日内瓦高等音乐学院学习作曲、电子音乐作曲，分别师从Michael Jarrell及Luis Naon。</p>\n' +
                                    '<p>2015年至2019年，他继续师从朱世瑞教授攻读作曲硕士学位。2019年6月，他的论文及作品均以最高的分数通过答辩，获上海音乐学院音乐（作曲）硕士学位。</p>\n' +
                                    '<p>在求学期间，依克山荣获2010年中国第二届全国打击乐器作曲比赛优秀奖，2010年上海第二届“百川奖”作曲比赛的一等奖，以及2014年北京第十一届国际电子音乐节电子音乐作曲比赛A组优秀奖。</p>\n' +
                                    '<p>2013年，奥地利20世纪当代室内乐团（Ensemble XX. Jahrhundert）在上海当代音乐周成功首演了他的委约作品：弦乐四重奏《三色调制》。</p>\n' +
                                    '<p>2015年，他受邀成为法国曼卡音乐节（Manca Festival）驻节作曲家. </p>\n' +
                                    '<p>2019年，他获得2019意大利首届卢契亚诺·贝里奥国际作曲大赛唯一大奖。</p>\n' +
                                    '<p>目前，依克山作为自由职业作曲家在上海继续他的创作。</p>\n',
                                avator: 'https://mayflower.s3.amazonaws.com/Yikeshan.jpg'
                            },
                            // {
                            //     id:'5',
                            //     name:'钱慎瀛',
                            //     introduction: '',
                            //     avator: ''
                            // },
                            // {
                            //     id:'6',
                            //     name:'胡玥',
                            //     introduction: '<p>胡玥，青年作曲家，星海音乐学院作曲系教师。毕业于中央音乐学院，获作曲专业博士学位。学习期间师从刘霖教授、罗新民教授、杨勇教授等名师。在校期间获得国家奖学金、国家研究生奖学金、北京市高校成才表率、首都高校社会实践先进个人、北京市高校优秀毕业生等荣誉。</p>\n' +
                            //         '<p>她主要作品有，管弦乐作品《呼唤》、《远古的回声》；室内乐作品《日暮秋江图》、《芦笙舞》、《私语》等。她的作品曾被中央电视台、清华大学、中国国家大剧院等团体委约。其中《女书人的雫辄》成功上演于北京国家大剧院；唢呐与打击乐《心潮》、民乐重奏《弦管五阙》（收录于《岭南雅韵作品集》）、钢琴独奏《月满天心》首演于星海音乐学院音乐厅并在暨南大学出版社出版的《岭南风格钢琴作品集》中发表。她与中外的演奏家、室内乐团、交响乐团均有过合作，如香港青年管乐团、中国敦善管乐团等。</p>\n' +
                            //         '<p>著有论文《拉扎·瓦利‹走向无尽的平原›创作技法研究》、《单音思维在唢呐协奏曲<唤凤>中的运用》、《美国当代作曲家卿纳瑞·昂管弦乐创作研究》（2017年由人民音乐出版社出版）等。</p>\n',
                            //     avator: 'https://mayflower.s3.amazonaws.com/YueH.jpg'
                            // },

                        ],

                        url:'https://mayflower.s3.amazonaws.com/compose.png',
                        summary:'作曲课由屡获殊荣的著名作曲家担任授课老师，这是一门能够帮助学生强化其不同的音乐风格、以及独特的个人创造力的私人指导课程。',
                        content:['作曲课由屡获殊荣的著名作曲家担任授课老师，这是一门能够帮助学生强化其不同的音乐风格、以及独特的个人创造力的私人指导课程。除美好艺术中心的作曲老师以外，学生还有机会与世界各地其他客座作曲家和表演者学习，呈上他们的习作并获得宝贵的评论。']
                    },
                    {
                        id:'2',
                        name:'音乐理论',
                        videoId:'',
                        teacher: [
                            {
                                id:'1',
                                name:'王萌',
                                introduction: '<p>青年作曲家王萌毕业于中央音乐学院, 美国曼哈顿音乐学院, 现为辛辛那提大学音乐学院博士候选人。她的 作品曾在北美，欧洲，亚洲等多个重要场馆演出过，合作过的乐团包括美国辛辛那提交响乐团, 哥伦布交响乐团, 佛罗里达州Jacksonville交响乐团, 比利时布鲁塞尔爱乐，MSM作曲家管弦乐团, 上海交响乐团打击乐组，阿斯本当代乐团, Longleash 三重奏, F-Plus 当代室内乐团及加拿大 Thin Edge 新音乐团等。此外, 她的音乐还出现在国际一流的音乐节中,包括美国 Aspen 音乐节, Cabrillo 音乐节，Bowdoin 国际音乐节,比利时TACTUS 国际青年作曲家论坛，美国作曲家乐团 EarShot Reading, 美国中西部作曲家研讨会及北京现代音乐节等。最近的委约包括为ccm concert orchestra 创作的钢琴协奏曲，将于2022年3月首演。</p>',
                                avator: 'https://mayflower.s3.amazonaws.com/WangM.jpg'
                            },
                        ],
                        url:'https://mayflower.s3.amazonaws.com/theory.png',
                        summary:'如果你对音乐很认真，那么音乐理论是你必须理解和掌握的。从Pitch、rhythm 到harmony and form analysis, 这门课程帮助无数的学生系统地（systematic) 建立了扎实的音乐基础。',
                        content:[
                            '如果你对音乐很认真，那么音乐理论是你必须理解和掌握的。从Pitch、rhythm 到harmony and form analysis, 这门课程帮助无数的学生系统地（systematic) 建立了扎实的音乐基础。',
                            '课程分为A1-A3三个等级，将你平滑地从Beginner level 带到Advance level。课程使用全美音乐学院Music Theory课通用的leading textbook：The Complete Musician—An Integrated Approach to Tonal Theory, Analysis, 由Juilliard Music Theory and Analysis 的departmen chair Steven Laitz authored，配合讲师经过近10年教学经验整合的独特hand out，让你在课程结束时达到美国音乐学院Theory Undergraduate 水平。课程含有pre-分班考试，具体的level介绍请发邮件到 2019mayflowerartcenter@gmail.com与我们联系。'

                        ]
                    },
                    {
                        id:'3',
                        name:'西方音乐史 ',
                        videoId: 'kVbDB124OYQ',
                        teacher: [
                            {
                                id:'1',
                                name:'Caroline Sackleh',
                                introduction: '<p>Caroline Sackleh于2020年获得辛辛那提大学音乐学院巴松管演奏音乐艺术博士学位。还取得了路易斯安那州立大学硕士学位和伊利诺伊大学厄巴纳-香槟分校学士学位，专业都是大管演奏。</p>\n' +
                                    '\n' +
                                    '<p>她是New Downbeat的创始人和总监，这是一个新的音乐团体，以女音乐家表演在世作曲家的作品为特色。</p>\n' +
                                    '\n' +
                                    '<p>除了她在新音乐领域的工作,她还在辛辛那提地区与许多著名的管弦乐团有合作，例如:肯塔基州交响乐团、里士满交响乐团、俄亥俄州西南部爱乐乐团,卡梅尔交响乐团、巴吞鲁日交响乐团、快速交响乐团,厄交响乐团。</p>\n' +
                                    '\n' +
                                    '<p>除了她的音乐才能，Caroline已经获得了超过五年的大学招生经验。在路易斯安那州立大学学习两年，在辛辛那提大学音乐学院学习三年。</p>\n' +
                                    '\n' +
                                    '<p>Caroline是伊利诺斯州内珀维尔人，七年级时听过普罗科菲耶夫(Sergei Prokofiev)的《彼得与狼》(Peter and the Wolf)后开始演奏巴松管，她认为祖父的声音是最酷的事情!音乐之外，她的兴趣是园艺、烹饪和徒步旅行。</p>\n' +
                                    '\n' +
                                    '\n',
                                avator:'https://mayflower.s3.amazonaws.com/CarolineS.jpg',
                            },
                        ],
                        url:'https://mayflower.s3.amazonaws.com/history.png',
                        summary:'本课程将探索17世纪至21世纪的西方古典音乐。专注于巴洛克时代，古典时代，浪漫主义时代，20世纪和现当代。',
                        content:[
                            '本课程将探索17世纪至21世纪的西方古典音乐。专注于巴洛克时代，古典时代，浪漫主义时代，20世纪和现当代。此外，音乐的创作发展，作曲家，音乐实例分析都将是这10周课程的一部分。 '
                        ]
                    },
                    {
                        id:'4',
                        name:'视唱练耳',
                        videoId: '',
                        teacher: [
                            {
                                id:'1',
                                name:'吴羿明',
                                introduction: '<p>吴羿明，自由作曲家，音乐教学家，中美美好艺术中心创办人。</p>\n' +
                                    '<p>毕业于中国中央音乐学院作曲系（师从于徐振民、徐昌俊、董立强）、美国约翰•霍普金斯大学皮博迪音乐学院（师从于作曲系主任、罗马大奖获得者 Michael Hersch先生）。</p>\n' +
                                    '<p>获奖经历：</p>\n' +
                                    '<p>2006年，23岁首次由中国人参赛三管编制交响乐获日本武满彻国际作曲比赛三等奖；</p>\n' +
                                    '<p>2008年获得比利时第三届赫尔贝克国际作曲比赛第二名；</p>\n' +
                                    '<p>2010年获得德国巴伐利亚广播交响乐团宝马国际作曲奖。</p>\n' +
                                    '<p>吴羿明原创音乐作品在东京爱乐乐团、比利时皇家管乐团、巴伐利亚广播交响乐团、北京交响乐团、美国Occasional Symphony交响乐团等全球演出。</p>\n' +
                                    '<p>2017年吴羿明先生定居美国马里兰州，创立了美好艺术中心，以创意教学和文化交流培养年轻的音乐人才。 吴羿明先生一直倡导“用业余的学习达到专业的水平”。仅仅三年时间，通过他精心指导和学生们的刻苦努力，从2019年至2021年4月，有近30名学生在全美、国际比赛中获得130多个重要奖项。有的比赛属于美国或国际顶级作曲比赛，如：American Prize、西贝柳斯国际作曲比赛；有的比赛由政府举办（如：奥地利总理府、哈萨克斯坦文化部）；有的比赛由著名音乐学院举办（如：舒伯特音乐学院、维也纳音乐学院）；有的比赛由著名交响乐团举办（如：National Youth Orchestra in USA，the New Vienna Symphony in Austria）；还有些比赛由美国的音乐组织举办（如：The American Composers Forum， Nation Parent Teacher Association）</p>\n' +
                                    '<p>很多比赛是没有年龄限制的专业比赛，参赛选手是音乐学院老师、音乐学院作曲系的学生、以及职业作曲家。而美好艺术中心的学生只是年龄8至17岁，课余学习作曲的小学、初中、高中生。尽管如此，在一些比赛里，美好艺术中心的获奖人数已经超过了音乐院校。</p>\n' +
                                    '<p>2020年9月，美好艺术中心成立了网上音乐学校，同时也成立了美好艺术基金。</p>\n' +
                                    '<p>2021年，美好艺术中心吸引了中美多位知名音乐家及音乐院校的教授加入。除作曲课之外，增加了西方音乐史、音乐理论、视唱练耳、乐器演奏等课程。学校网站在2021年4月正式上线，招生范围面向全世界的音乐爱好者。</p>\n' +
                                    '<a href="wuyiming.org">wuyiming.org</a>'
                                ,
                                avator:'https://mayflower.s3.amazonaws.com/YimingW.jpg',
                            },
                            {
                                id:'2',
                                name:'王萌',
                                introduction: '<p>Wang Meng is a Chinese composer currently based in Cincinnati. Her music has been performed internationally by notable orchestras and ensembles, including Brussels Philharmonic, Cincinnati Symphony Orchestra, Columbus Symphony, Jacksonville Symphony, MSM Composer’s Orchestra, China Youth Symphony; Aspen Contemporary Ensemble, Thin Edge New Music Collective, Longleash Trio, F- Plus Ensemble, among others.</p>\n' +
                                    ' \n' +
                                    '<p>Wang was a composer fellow at Aspen Music Festival, Cabrillo Music Festival and was selected to participate in 2019 [\'tactus] Young Composers Forum with Brussels Philharmonic and American Composers Orchestra EarShot readings in 2018. Recent commissions include a percussion ensemble piece for Shanghai Symphony in Chamber Concert series and a piano concerto for CCM Concert Orchestra.</p>\n' +
                                    '\n' +
                                    ' \n' +
                                    '<p>Wang is currently pursuing her DMA in composition at University of Cincinnati as a student of Prof. Douglas Knehans. She is an alumnus of Central Conservatory and Manhattan School of Music, where she held the Deolus W. Husband Scholarship for Composition in 2015-2017. Her primary instructors include composers Wenchen Qin, Reiko Füting. She also received instructions from composer Andreia Pinto Correia.</p>\n',
                                avator: 'https://mayflower.s3.amazonaws.com/WangM.jpg'
                            },
                        ],

                        url:'https://mayflower.s3.amazonaws.com/aural.png',
                        summary:'与音乐理论一样，视唱练耳对于学好音乐同样重要。这是个人整体音乐素养所必需的课程。 ',
                        content:[
                            '与音乐理论一样，视唱练耳对于学好音乐同样重要。这是个人整体音乐素养所必需的课程。 本课程分为两个级别，着重于学生的听觉/固定音高训练，视谱、节奏和和声感的培养。 第一级别的课程包括识别音程/音阶，旋律听写及简单的和弦进行；高级课程将更多地集中在复杂的节奏，音簇的听辩，无调性旋律听写及和弦连接。全课程结课时学生将达到美国音乐学院/大学预科水平。'
                        ]
                    },
                    {
                        id:'5',
                        name:'声乐',
                        videoId: '',
                        teacher: [
                            {
                                id:'1',
                                name:'白海波',
                                introduction: '<p>女高音白海波毕业于天津音乐学院和柯蒂斯Curtis音乐学院，主修声乐。先后从师王传娟教授和声乐大师Marlena Malas. 之后继续深造，从师著名男中音Todd Duncan， 女高音Maryann Stabile Cooper。</p>\n' +
                                    '<p>白海波曾获1986年北京全国电视大奖赛美声唱法优秀歌手奖，同年，她获天津“希望杯”声乐比赛第一名和天津少数民族声乐比赛第一名。白海波曾参加华盛顿国际歌剧院的十部著名西洋歌剧演出并担任剧中女主角。 如《费加罗婚礼》中伯爵夫人，《女人心》中的费欧德丽姬，《波西米亚人》中的咪咪，《蝴蝶夫人》中的乔乔桑，《托斯卡》中的托斯卡，《外套》中的姬奥杰塔，《福斯塔夫》中的爱丽丝，《奥泰罗》中的黛斯塔蒙娜，《拉莫尔的修女们》中的丽瑞娜等等。</p>\n' +
                                    '<p>白海波1987年在北京音乐厅举办演唱会， 在美国她先后在肯尼迪中心，纽约林肯中心Alice Tully Hall，马里兰州Strathmore 音乐厅演唱。 在新泽西Westfield Symphony Orchestra 演出的贝多芬第九交响曲和黄河大合唱中担任女高音独唱。白海波还曾在意大利，德国和加拿大演唱。</p>\n' +
                                    '<p>华盛顿邮报，歌剧新闻，巴尔的摩太阳报等媒体都对白海波的演唱和舞台表演予以高度评价。音乐评论期刊称赞“她有如玉液琼浆般甜美的声音”。</p>\n' +
                                    '<p>白海波1986年从天津音乐学院毕业后，留在声乐系任教。1987年来到柯蒂斯音乐学院学习。2012年4月应邀回母校讲课，并被聘请为天津音乐学院声乐系客座教授。白海波曾在美国和中国举办声乐大师班，担任声乐比赛评委。白海波热心从事声乐教学35年，至今担任在荣星儿童合唱团声乐指导长达20年。她培养的众多歌唱人才中有的考入著名大学，参加歌剧院，音乐厅演出，甚至成为大学里的声乐教师。</p>\n' +
                                    '<p>白海波教授学生美声声音训练，歌唱技巧。教学内容包括练声曲，古典意大利歌曲，德国，法国艺术歌曲，歌剧咏叹调，宗教歌曲， 中国艺术歌曲，民歌， 英文歌曲，西班牙歌曲， 欧美音乐剧选曲。 </p>\n',
                                avator:'https://mayflower.s3.amazonaws.com/Haibo+bai.jpg',
                            },
                        ],
                        url:'https://mayflower.s3.amazonaws.com/Shengyue.png',
                        summary: '教授学生美声声音训练，歌唱技巧。',
                        content:[
                            '教授学生美声声音训练，歌唱技巧。教学内容包括练声曲，古典意大利歌曲，德国，法国艺术歌曲，歌剧咏叹调，宗教歌曲， 中国艺术歌曲，民歌， 英文歌曲，西班牙歌曲， 欧美音乐剧选曲。 '
                        ]
                    },
                    {
                        id:'6',
                        name:'古筝',
                        videoId: '',
                        teacher: [
                            {
                                name:'顾磊',
                                introduction:'<p>顾磊，自幼师从 上 海音乐学院古筝名家何宝泉、孙文妍教授，有非常深厚的古筝专业技术功底。高中时期曾以上海市民族乐器独奏大赛古筝组第一名的成绩被浙江省歌舞团破格录取为该团的古筝独奏演员。</p>\n' +
                                    ' \n' +
                                    '<p>移居美国后，顾磊老师创建了“华盛顿敦煌筝乐坊”，竭力推广古筝这一中国古老的名族乐器。她根据多年的演奏与教学实践中积累丰富的教学经验，编著了成人和儿童两本古筝教材。目前，她的学生遍及马里兰和维州部分地区，有的甚至从外州慕名而来。她经常鼓励并亲自带领学生参加各种演出和比赛，并取得了非常优异的成绩。由于学生们不断荣获各类古筝比赛国际大奖，顾磊老师也因此多次被比赛组委会授予“优秀教师奖”荣誉证书。.</p>\n',
                                avator:'https://mayflower.s3.amazonaws.com/lei.jpg',
                            }
                        ],

                        url:'https://mayflower.s3.amazonaws.com/guzheng.png',
                        summary:'近年来，我们除了从演出形式是不断创新，教育形式是也在不断改革。通过这几年的教学，我们拥有了自己的一套有计划、有步骤的教学系统。',
                        content:[
                            '为了更好的向广大古筝爱好者提供高质量、规范化的教学体系，近年来，我们除了从演出形式是不断创新，教育形式是也在不断改革。通过这几年的教学，我们拥有了自己的一套有计划、有步骤的教学系统。教材由浅入深，好听易学。除了一对一课程之外，我们也提供成人团体课训练及青少年团体课训练。这两组课程都是以小组和为主，学生3-4人。另外，我们还提供一个幼儿早期音乐教育的特别项目。这个项目是给幼儿年龄的孩子一个接触古筝音乐的机会，培养她们对古筝音乐的兴趣和手指运用的基本技能。'
                        ]
                    },
                    {
                        id:'7',
                        name:'小提琴/中提琴课程介绍',
                        videoId: '',
                        teacher: [
                            {
                                name:'刁卓',
                                introduction: '<p>5岁开始学习小提琴，12岁开始同步学习中提琴，并在北京市器乐比赛中获得一等奖。</p>\n' +
                                    '<p>2004年考入中央音乐学院师从何荣教授；大学本科期间多次获得国家、学校奖学金、三好学生及优秀干部称号。</p>\n' +
                                    '<p>2008年获学士学位，北京市优秀毕业生称号；同年获得全额奖学金赴美国Shenandoah University Conservatory随Doris Lederder学习中提琴表演。</p>\n' +
                                    '<p>2010年获得硕士学位。</p>\n' +
                                    '<p>2012年获演奏家文凭。</p>\n' +
                                    '<p>2015年-至今 在弗吉尼亚州，教授中提琴与小提琴私人课程</p>\n' +
                                    '<p>音乐演出活动：</p>\n' +
                                    '<p>2005年2月 为中国财政部演出（指挥：胡咏言）</p>\n' +
                                    '<p>2005年9月 参加中央音乐学院55周年院庆演出活动，以及歌剧《茶花女》（指挥：李心草）</p>\n' +
                                    '<p>2005年9月-12月 参加教育部号召的“高雅艺术走进高校”活动，演出20场次。任中提琴首席（指挥：夏小汤）</p>\n' +
                                    '<p>2005年10月 参加小泽征尔音乐塾（指挥：小泽征尔）</p>\n' +
                                    '<p>2005年10月 二十国财长和银行行长会议演出（指挥：胡咏言）</p>\n' +
                                    '<p>2006年5月 参加党委、团委、学生处举办的“三下乡”走进密云，普及高雅音乐演出。中提琴二重奏</p>\n' +
                                    '<p>2006年12月13日 参加“云上的日子 – 叶小纲教授师生作品音乐会”， 演奏作曲家王琳为人声、指挥及乐队创作的《八音》，中国首演，担任中提琴独奏。</p>\n' +
                                    '<p>2006年12月20日 中央音乐学院第六届音乐节开幕式演出（指挥：朱亦兵、夏小汤）</p>\n' +
                                    '<p>2006年12月30日 中央音乐学院第六届音乐节闭幕式演出（指挥：韦尔纳.安德里亚斯.阿尔伯特-德国）</p>\n' +
                                    '<p>2007年 6月 随北京新空气交响乐团，参加中国巡演，担任中提琴副首席</p>\n' +
                                    '<p>2007年11月 随中国中提琴重奏团，参加中国巡演</p>\n' +
                                    '<p>2008年10月 赴丹麦参加卡尔.尼尔森弦乐团(string orchestra)，担任中提琴首席</p>\n' +
                                    '<p>2008年-至今 Shenandoah University 交响乐团副首席</p>\n' +
                                    '<p>2010年成立个人音乐工作室</p>\n' +
                                    '<p>2012年2月 受邀为弗吉尼亚理工大学表演，受邀在美国华盛顿特区，中国大使馆为元宵节晚会表演。</p>\n' +
                                    '<p>2012-2014年 任职于马里兰州National string symphonia弦乐团</p>\n' +
                                    '<p>2014年 受邀华盛顿特区马年春晚演出</p>\n',
                                avator:'https://mayflower.s3.amazonaws.com/zhuo.jpg',
                            }
                        ],

                        url:'https://mayflower.s3.amazonaws.com/violin.png',
                        summary:'本课程包括三个级别：初级、中级、高级。课程将专门针对每位学生因材施教，量身定制，同时涵盖基本功训练，和技巧训练。',
                        content:[
                            '初级：基本功训练，音阶、琶音、练习曲，铃木镇一小提琴教材启蒙1-4册',
                            '中级 ：基本功训练，音阶、琶音、练习曲，铃木镇一小提琴教材启蒙5-8册',
                            '高级 ：音阶、琶音、练习曲，巴赫无伴奏组曲，巴赫奏鸣曲以及九十级协奏曲',
                        ]
                    },
                    {
                        id:'8',
                        name:'巴松',
                        videoId:'',
                        teacher: [
                            {
                                name:'Caroline Sackleh',
                                introduction: '<p>Caroline Sackleh于2020年获得辛辛那提大学音乐学院巴松管演奏音乐艺术博士学位。还取得了路易斯安那州立大学硕士学位和伊利诺伊大学厄巴纳-香槟分校学士学位，专业都是大管演奏。</p>\n' +
                                    '\n' +
                                    '<p>她是New Downbeat的创始人和总监，这是一个新的音乐团体，以女音乐家表演在世作曲家的作品为特色。</p>\n' +
                                    '\n' +
                                    '<p>除了她在新音乐领域的工作,她还在辛辛那提地区与许多著名的管弦乐团有合作，例如:肯塔基州交响乐团、里士满交响乐团、俄亥俄州西南部爱乐乐团,卡梅尔交响乐团、巴吞鲁日交响乐团、快速交响乐团,厄交响乐团。</p>\n' +
                                    '\n' +
                                    '<p>除了她的音乐才能，Caroline已经获得了超过五年的大学招生经验。在路易斯安那州立大学学习两年，在辛辛那提大学音乐学院学习三年。</p>\n' +
                                    '\n' +
                                    '<p>Caroline是伊利诺斯州内珀维尔人，七年级时听过普罗科菲耶夫(Sergei Prokofiev)的《彼得与狼》(Peter and the Wolf)后开始演奏巴松管，她认为祖父的声音是最酷的事情!音乐之外，她的兴趣是园艺、烹饪和徒步旅行。</p>\n' +
                                    '\n' +
                                    '\n',
                                avator:'https://mayflower.s3.amazonaws.com/CarolineS.jpg',
                            }
                        ],

                        url:'https://mayflower.s3.amazonaws.com/Basson.png',
                        summary:'为各种技能的低音管演奏者提供的私人课程。 ',
                        content:['为各种技能的低音管演奏者提供的私人课程。' ,
                            '    课程将专门针对每个人量身定制，同时涵盖基础知识，以便在乐器上获得全面的便利。 随着课程的发展，将讨论和研究先进的技术和簧片制作。',
                            '    学生可以期望获得有关如何演奏巴松管并取得进步的全面指导，并从中获得乐趣！']
                    },
                    {
                        id:'9',
                        name:'钢琴',
                        videoId: '',
                        teacher: [
                            {
                                id:'1',
                                name:'谢东妮',
                                introduction: '<p>谢冬妮, 旅美钢琴博士。《先驱论坛报》评价她“…成熟而自然…完美地诠释了作曲家的意图”； “冬妮是我最喜欢的一位获奖选手…她完美精确的技术，音响效果听起来如同盖扎.安达（匈牙利伟大钢琴家）在演奏！为她喝彩！”（《北卡罗来纳古典之声》）“冬妮精湛的演绎和对音乐大胆的驾驭掀起了全场高潮！” </p>\n' +
                                    '<p>（《半岛评论》）</p>\n' +
                                    '<p>谢冬妮多次代表中国选手在国际大赛上获奖。包括2015洛杉矶SAI青年艺术家， 2015美国音乐公开赛金奖，2017奥德赛国际钢琴比赛金奖，2018West Virginia国际钢琴比赛金奖，2018德州青年艺术家国际钢琴比赛金奖，2019 Isabel Scionti钢琴比赛冠军。她受邀在纽约卡内基音乐厅，法国枫丹白露皇宫，西班牙希洪市市政厅，洛杉矶沃利斯.安纳伯格表演艺术中心，斯坦威中心及美国各大学，韩国首尔表演艺术中心，和中国各音乐厅举行音乐会。合作过的乐团包括科罗拉多Boulder交响乐团和洛杉矶Debut交响乐团。2019年夏天谢冬妮受邀在伦敦和斯洛伐尼亚的August Music和ARTIS音乐节演出；她也是斯洛文尼亚国家音乐节Imago的特邀艺术家，并为斯总统内阁及中国驻斯大使馆人员进行演出.2020 年谢冬妮受邀在驻美国中国大使馆与郎朗等青年音乐家们演出中秋国庆云端音乐会。</p>\n' +
                                    '<p>除了作为一名古典音乐家，谢冬妮致力于探索音乐发展的多种可能性。她在美国成立了跨界六重奏In6ix，由包含她在内的两位古典音乐家（钢琴和长笛） 及四位来自全美爵士排名第一的北德州大学的顶级乐手（爵士小提琴，吉他，贝司和鼓）组成。谢冬妮带着来自欧美亚不同国家的音乐家们在上海和杭州成功举行了音乐会，并在上海音乐学院和浙江音乐学院进行讲学交流。</p> \n' +
                                    '<p>五岁开始学琴，谢冬妮以第一名从武汉音乐学院附小直升附中，12岁在编钟音乐厅成功举行首次独奏音乐会。2008年考入上海音乐学院，师从旅法钢琴家， 钢琴系主任江晨教授；同时也是牛恩德钢琴奖学金，国家人民奖学金及国家奖学金获得者。2012考入美国约翰霍普金斯大学皮博迪音乐学院攻读研究生，师从 美国吉娜-巴考尔国际钢琴大赛评委，著名钢琴家教育家文龙姬（Yong Hi Moon） 教授；毕业后考入南加州大学跟随布伦德尔学生，著名钢琴家诺曼克力格(Norman Krieger)深造，获得演奏家文凭。2016年起师从于范克莱本国际比赛评委帕米拉•米娅•保罗(Pamela Mia Paul)，在北德克萨斯州大学担任钢琴本科基础课老师，以全额奖学金完成钢琴演奏博士学位。谢冬妮历年来有幸受教于多为大师，包括Richard Goode, Robert Mcdonald, Weber Dominique, Robert Levin, John Perry, Ian Hobson, and Boris Slutsky,傅聪，郭嘉特，黄懿伦，但昭义，许忠等。</p>\n' +
                                    '<p>谢冬妮也经常进行室内乐演出。数次被全额赞助参与室内乐音乐节，与匹兹堡，洛杉矶爱乐交响乐团成员和来自柯蒂斯音乐学院的优秀音乐家们合作演出。</p>\n' +
                                    '<p>谢冬妮目前为德州塔兰特学院钢琴教授。 </p>\n',
                                avator: 'https://mayflower.s3.amazonaws.com/Dongni+Xie.jpeg'
                            },
                            {
                                id:'2',
                                name:'焦人和 ',
                                introduction: '<p>毕业于中央音乐学院 </p>\n' +
                                    '<p>师从卞萌教授</p>\n' +
                                    '<p>20年专业钢琴教学经验</p>\n' +
                                    '<p>担任各大钢琴比赛评委</p>\n' +
                                    '<p>多名学生在国际钢琴比赛中获奖</p>\n' +
                                    '\n' +
                                    '<p>钢琴演奏</p>\n' +
                                    '\n' +
                                    '<p>描述：</p>\n' +
                                    '\n' +
                                    '<p>钢琴演奏是音乐学习的基础课程，无论您想以后从事专业钢琴演奏亦或从事作曲、指挥、声乐等相关专业，加强钢琴基本功训练和相关基础知识的学习都非常重要。</p>\n' +
                                    '\n' +
                                    '<p>本套课程包含从钢琴入门到准专业的内容</p>\n' +
                                    '\n' +
                                    '<p>课程分为三个级别：</p>\n' +
                                    '<p>A1：（1-3级）</p>\n' +
                                    '<p>A2：（4-6级）</p>\n' +
                                    '<p>A3：（7-8级）</p>\n' +
                                    '\n' +
                                    '<p>教材选用英国皇家音乐学院联合委员会考级钢琴科目（1-8级）</p>\n' +
                                    '<p>英皇考级被称为国际化的考级，是国际公认最具权威的音乐考级之一</p>\n' +
                                    '\n' +
                                    '<p>系统的学习本课程除了能够训练科学的钢琴演奏方法，还可以掌握视奏、基础乐理、视唱、练耳等相关内容，这对提高学生的综合音乐素养很有帮助。</p>\n',
                                avator: 'https://mayflower.s3.amazonaws.com/RenheJ.jpg'
                            }

                        ],
                        url: 'https://mayflower.s3.amazonaws.com/piano.png',
                        summary: '面向各等级学生， 从零基础到中高级。掌握基本的识谱，试奏，手指训练，流畅演奏；理解不同时期的曲目背景风格。 课程形式为一对一，时长内容根据学生程度而定。',
                        content: [
                            '面向各等级学生， 从零基础到中高级。掌握基本的识谱，试奏，手指训练，流畅演奏；理解不同时期的曲目背景风格；解析不同作曲家作品的演奏要点，从音乐核心出发帮助学生建立高级的艺术品位，让学生最终能自己拥有驾驭诠释音乐会曲目。课程形式为一对一，时长内容根据学生程度而定。',
                            '初级：',
                            '从零开始学习音符，节奏，和基本的演奏；培养学生的基本音乐素养以及学习时所需要的专注力，耐心和持之以恒。',
                            '中高级：',
                            '进一步挖掘学生的钢琴潜力，为学生量身挑选合适的曲目。通过对曲目和演绎风格的全方位深入解析，有效地训练和提高演奏技术，及演出实践，学生将有机会参加比赛获奖。对于有意向进入音乐学院的学生， 此课程将介绍音乐学院课程，准备面试曲目，模拟入学考试。'
                        ]
                    },
                    {
                        id:'10',
                        name:'琵琶',
                        videoId: '',
                        teacher: [
                            {
                                id:'1',
                                name:'杨瑾',
                                introduction: '<p>中央音乐学院琵琶硕士，武汉音乐学院讲师，美国Kent State University访问学者。中国音乐最高奖“金钟奖”银奖获得者，登台卡内基音乐厅、林肯中心、肯尼迪中心、哈里斯剧院，马友友“丝路乐团”客席演奏家。特拉华大学“美国名家音乐节”特聘教师，美国排名第一的伊斯曼音乐学院HummingBird国际音乐节暨“华乐杯”国际大赛评委。中央俄克拉荷马州立大学客座琵琶专业研究生导师。</p>\n' +
                                    '<p>四岁习柳琴，九岁习琵琶；1994年师从著名琵琶教育家吴俊生，1995考入中央音乐学院附小，2005年保送中央音乐学院研究生，在校14年，一直保持年级第一。先后师从李晖教授、孙维熙教授，并得到琵琶泰斗林石城、著名琵琶教育家王范地、邝宇忠、李光祖、李光华、郝怡凡、杨靖、张强、章红艳，以及华裔琵琶大师吴蛮等众多琵琶名师的指点。</p>\n' +
                                    '<p>作为中国青年民族乐团、中央音乐学院弹拔乐团、东方女子乐坊、国乐天娇、东方中乐团的核心成员，足迹遍及中国大陆、香港、澳门、台湾以及美国、日本、菲律宾、英国、法国等。2005-2007年，四赴日本举办巡回音乐会50多场；2007-2012年，与钢琴王子理查德-克莱德曼举办 “王子与天骄” 中国巡回音乐会数十场。多次参加中央电视台的 “同一首歌” 、 “国乐飘香” 、 “走进中国” 、文化部春节晚会的节目录制，并为胡锦涛主席、法国总统希拉克等国家领导人做汇报演出。担任电影《功夫之王》中刘亦菲的琵琶艺术指导。</p>\n' +
                                    '<p>1997年荣获 “天华杯” 全国少年琵琶大赛一等奖； 2004年荣获中国音乐最高奖 “金钟奖” 银奖； 2007年荣获旧金山 “飞扬—世界杯” 民族器乐大赛二等奖；2009荣获台北市民族器乐大赛（琵琶）优异奖，并被评委会主席林谷芳先生评为 “最具潜力琵琶演奏家” 。</p>\n' +
                                    '<p>先后在北京、武汉、克利夫兰、匹兹堡、华盛顿等地举办专场音乐会，其演奏水平受到国内外专家及同行的高度肯定。出版的中国首张民乐大师纯独奏发烧天碟《杨瑾琵琶》荣获2006年中国国际音像博览会制作金奖、销售金奖，并被国家图书馆收藏。</p>\n' +
                                    '<p>2010年作为大陆唯一入选的琵琶演奏者，受卡内基音乐厅之邀参加首届 “Kronos Quartet and Wu man（吴蛮）Master Class” ，成为登上世界最顶级音乐厅—卡内基音乐厅的新一代民乐演奏家。2013年至今，作为克利夫兰民族乐团、匹兹堡紫竹民族乐团、HarmongZing乐团以及The Afro Yaqui Music Collective爵士乐团的独奏演奏家，在俄亥俄、宾夕法尼亚和华盛顿特区等地举办数百场音乐会，受到广泛的关注和好评。</p>\n' +
                                    '<p>2016年10月加入著名大提琴演奏家马友友（Yo-Yo Ma）的 “丝绸之路” （ Silk Road Project）合奏团与著名的马克·莫里斯舞团以及阿塞拜疆木卡姆大师阿利姆·卡斯摩夫合作推出的音乐史诗《莱拉与玛吉努》（Layla and Majnun）全球巡演，迄今在全美乃至全球重要的城市和舞台（纽约林肯中心、芝加哥哈里斯剧院、华盛顿肯尼迪艺术中心、伦敦沙德勒之井剧院等）巡演超过20场。</p>\n' +
                                    '<p>2017年，与克利夫兰音乐学院教授王帅、印第安纳波利斯交响乐团中提首席金钰组建Helio Phoenix Ensemble重奏团，积极探索和发掘新音乐形式和作品。杨瑾发起的 “杨瑾和朋友们” 系列跨界音乐会在美国各地产生了巨大的反响和热烈的欢迎，被称为 “小丝路乐团” 。</p>\n' +
                                    '<p>得益于十多年最专业严格的训练，以及广泛而多元的演奏生涯，杨瑾的演奏技艺精湛，音乐表现力极强，具有强烈的艺术感染力，被誉为“极具舞台表现力”的琵琶演奏家。</p>\n',
                                avator: 'https://mayflower.s3.amazonaws.com/JinY.jpg'
                            },
                        ],
                        url: 'https://mayflower.s3.amazonaws.com/Pipa.png',
                        summary: '本中心琵琶课程旨在让学员领略中国传统音乐之美，提升音乐素养，在短期内爱上音乐，并掌握琵琶演奏技巧并培养多元化演奏人才。参加国际比赛，考级，与室内乐，世界音乐小组，交响乐团合作。',
                        content: [
                            '琵琶（Chinese Lute），拥有二千多年的历史，秦朝时由波斯传入中国。因其音域的广阔、音色的多变、表现力的丰富、演奏技巧的多样，琵琶被称为“国乐之王”。现今，藉着吴蛮老师等音乐人辛勤的耕耘，这件深具东方意韵的古老乐器已经在西方主流舞台上焕发勃勃生机。先锋派作曲家Luo Hurrison、极简主义大师Terry Riley、Philip Glass纷纷为琵琶创作，无论是交响乐团或室内乐团，以及爵士乐队都与琵琶有着相当好的合作。纽约巴德学院、明尼苏达州立大学、中央奥克拉荷马大学，悉尼大学均已开设琵琶演奏专业。',
                            '本中心琵琶课程旨在让学员领略中国传统音乐之美，提升音乐素养，在短期内爱上音乐，并掌握琵琶演奏技巧并培养多元化演奏人才。参加国际比赛，考级，与室内乐，世界音乐小组，交响乐团合作。',
                            '初级班，零基础，音乐启蒙——学习基本演奏技法，训练音准节奏。琵琶初级教程。',
                            '中级班，增技艺，音乐提升——强化基本功，丰富音乐想象力，加入室内乐训练。中央音乐学院考级教材及重奏教材',
                            '高级班，高技艺，音乐表达——提升专业演奏能力、音乐表现力，增强室内乐及协奏曲的训练。琵琶协奏曲集，琵琶现代创作作品集及室内乐作品集。'
                        ]
                    },
                    {
                        id:'11',
                        name:'单簧管',
                        videoId: '',
                        teacher: [
                            {
                                id:'1',
                                name:'郑育婷',
                                introduction: '<p>被誉为“技术流利兼具细腻的音色” （32届奇美艺术奖）、”升华般的演奏”及“明亮绚丽的音调” (普立兹奖得主作曲家寇瑞格.雷亚诺),来自台湾的单簧管演奏家郑育婷自幼就展赋着罕见的音乐天赋, 在师大附中音乐班就读期间，年仅14岁的她即获得全国性音乐比赛行天宫菁音奖少年组特优第一名。自东吴大学毕业后考取约翰霍普金斯大学皮博迪音乐院硕士班及纽约石溪大学博士班，在美求学期间陆续获得纽约州立石溪协奏曲比赛管乐组第一名、三十二届奇美艺术奖及北方国际音乐比赛单簧管第一名, 瓦莱里甘迺迪单簧管奖学金、获选琵琶地音乐院杰出台湾校友，更凭借着在现代音乐中卓越亮眼的表现，获得耶鲁大学诺沃克新音乐研究Norfolk New Music Workshop 颁发Ellen Battell Stoeckel 奖学金，并受邀参与2020瑞士琉森音乐节LUCERNE Festival Academy新音乐研究。育婷的演出足迹横跨亚洲与美国, 定期在台北国家演奏厅、高雄卫武营等场地定期举办音乐会, 在美国纽约、马里兰州、宾州、田纳西州、康州、伊利诺伊州、西维吉尼亚州等均举办过演讲、独奏会和大班课等等向听众、学生们分享对于音乐的热忱及推广音乐教育。近期重要演出包含与指挥迈可.摩根(Michael Morgan)及石溪交响乐团演出约翰. 寇瑞格雷亚诺( John Corigliano ) 极具挑战之单簧管协奏曲, 随后由Troy Public Radio电台节目“Clarinet Corner” 全程转播; 受邀耶鲁诺沃克音乐营线上音乐会演出Danzi g-Minor Quintet Op. 56 No. 2; 与纽约布鲁克林室内交响乐团以独奏之姿合作演出Bellini Sinfonia Breve in D major; 新亚室内乐演出Mozart “The Kegelstatt Trio” K. 498 及Bruch Eight Pieces;</p>\n' +
                                    '<p>出生于台北, 育婷拥有约翰霍普金斯大学琵琶地音乐院硕士学位、 纽约州立石溪大学音乐系博士学位, 与前巴尔的摩交响乐团(Baltimore Symphony Orchestra)单簧管首席Steven E. Barta、 纽约知名奥菲斯室内交响乐团单簧管首席Alan R. Kay学习; 育婷现任于纽约布鲁克林室内交响乐团。</p>\n',
                                avator: 'https://mayflower.s3.amazonaws.com/YutingZ.JPG'
                            },
                        ],
                        url: 'https://mayflower.s3.amazonaws.com/Clarinet.png',
                        summary: '单簧管课程包含初学, 中级 , 高级。从培养对单簧管的热情，建立基础乐理常识，到培养艺术性和取得卓越的艺术成就。郑博士的课程还包含为每位学生提供成果发表视频/音频剪辑。并在每年年底为学生举办线上音乐会。',
                        content: [
                            '单簧管课程包含初学, 中级 , 高级。从培养对单簧管的热情，建立基础乐理常识，到培养艺术性和取得卓越的艺术成就。郑博士的课程还包含为每位学生提供成果发表视频/音频剪辑。并在每年年底为学生举办线上音乐会。',
                            '作为职业单簧管演奏家及极具热忱的教育家，我的主要目标是激发学生成为能够贯彻自我指导和有效率的学习者，培养他们对单簧管的热情，并帮助他们取得卓越的艺术成就。通过鼓励各个级别的学生制定明确的短期和长期目标，并将这些目标与有效的练习时间和有效的练习方法相结合，以形成一个整体的学习体系，实现各个阶段的目标。',
                            '单簧管由于其独特的音调和音域，通常被认为是最接近人类声音的乐器。因此，从我的角度来看，我坚持必须让学生像声乐歌手一样通过单簧管“歌唱”，并发展他们的感官和听觉，以培养自然的音乐语言，呼吸，表达和风格感选择和措辞，而不是仅仅专注于机械式地演奏正确的音符。除了培养艺术性和浓厚的音乐风格，我希望每个学生都能在演奏基础上努力，这些基础功不仅能有助于优美音质的发展，包括声音产生，呼吸支持，发声，弹奏，音准和簧片调节等。关于提高技术，我为学生提供了有效的练习策略，例如解决问题的能力，时间管理，坚持不懈和创造性思维。这样，我的学生能高效且充满信心地克服各项技术难题。',
                            '我相信，给学生提供探索单簧管艺术性的机会, 并鼓励他们之间合作或进行创新的改变, 对他们的成长具有深远的影响。透过定期举办的大班课及演奏会能激发学习动力, 并为他们累积自信与表演经验。从我的课程中毕业后, 我的学生将拥有所有必要的音乐技能, 并能够在音乐才华和日后职业生涯中持续成功, 发光发热。',

                        ]
                    },
                    {
                        id:'12',
                        name:'古典⼿风琴',
                        videoId: '',
                        teacher: [
                            {
                                id:'1',
                                name:'王寒之',
                                introduction: '<p>王寒之，⼿⻛琴</p>\n' +
                                    '<p>独具开创性的⾳乐家王寒之，因其迷⼈的舞台表现和精湛的技术和⾳乐表演⽽\n' +
                                    '受到称赞，是其 60 年历史中唯⼀⼀位加⼊美国⻘年⾳乐会艺术家（Young\n' +
                                    'Concert Artists) 的⼿⻛琴演奏家。</p>\n' +
                                    '<p>其他⾸创包括被 Musical America 评为“本⽉新艺术家”、在纽约 WQXR ⻘年艺\n' +
                                    '术家展第 2,145 集中，作为该节⽬的第⼀位独奏⼿⻛琴家的采访和表演，以及\n' +
                                    'Naxos ⼚牌的第⼀张独奏⼿⻛琴 CD ,《前往安徒⽣世界的⼩路上》，2019 年\n' +
                                    '⼊围著名的 DR（丹⻨⼴播电台）P2 奖。</p>\n' +
                                    '<p>作为2017年美国⻘年⾳乐会艺术家第⼀名获得者，王寒之的⾸秀独奏⾳乐会在\n' +
                                    '纽约卡内基⾳乐厅拉开了2018-19乐季系列的序幕，她在华盛顿特区的⾸演拉\n' +
                                    '开了40周年美国⻘年⾳乐会艺术家在肯尼迪中⼼的⾳乐会系列，与华盛顿表演\n' +
                                    '艺术中⼼共同举办。</p>\n' +
                                    '<p>王寒之获得了⻢⾥兰州哥伦⽐亚烛光⾳乐会协会颁发的YCA表演奖；佛罗⾥达\n' +
                                    '州德斯廷的 Sinfonia 表演奖；在纽约市洛克菲勒⼤学举⾏的 Tri-I 独奏⾳乐会；\n' +
                                    '温哥华独奏⾳乐会；乌瑟多姆（德国）⾳乐节；三⻆室内乐团（北卡罗来纳\n' +
                                    '州）；佛罗⾥达⼤学表演艺术奖；以及伊利诺伊⼤学厄巴纳分校的克兰纳特中\n' +
                                    '⼼。其他活动包括在⽥纳⻄州的 IRIS Orchestra 演出，Bravo！Vail ⾳乐节演\n' +
                                    '出等等。</p>\n' +
                                    '<p>王寒之在意⼤利第40届Castelfidardo国际⼿⻛琴⽐赛中获得第⼀名，在⻄班⽛\n' +
                                    'Arraste国际⼿⻛琴⽐赛中获得第⼀名，并获得多项国际奖项。她在曼哈顿⾳乐\n' +
                                    '学院、根特⾳乐学院（⽐利时）、丹⻨皇家⾳乐学院、加州⼤学圣巴巴拉分\n' +
                                    '校、哥伦⽐亚⼤学、孟菲斯⼤学和⾳乐节包括 Bravo！ Vail ⾳乐节、挪威的\n' +
                                    'Nordaccordion ⾳乐节等等。作曲家 Martin Lohse、Katherine Balch、Jesper\n' +
                                    'Koch 以及更多⼈都为她写过作品并献给她。\n' +
                                    '<p>王寒之在哥本哈根的丹⻨皇家⾳乐学院完成了独奏家⽂凭，现在担任该学院的\n' +
                                    '助理教授。</p>\n',
                                avator: ''
                            },
                        ],
                        url: 'https://mayflower.s3.amazonaws.com/Accordion.png',
                        summary: '王⽼师的古典⼿风琴课程⾯向所有程度的学⽣开放。',

                        content: [
                            '王⽼师的古典⼿风琴课程⾯向所有程度的学⽣开放。她⽬' +
                            '前在哥本哈根的丹麦皇家⾳乐学院作为助理教授任教，她' +
                            '是唯⼀⼀位在 美国 Young Concert Artists 60 年历史中获得' +
                            '⼀席之地的⼿风琴演奏家。王⽼师在在世界各地举办过古' +
                            '典⼿风琴教育课程和⼤师班。',
                            '古典⼿风琴通常被认为是⼀种现代乐器，具有巨⼤的⾳乐' +
                            '表现⼒。第⼀台⼿风琴于 1829 年在欧洲发明，⼏⼗年后' +
                            '在此基础上诞⽣了古典⼿风琴。在许多国家，⼿风琴不仅' +
                            '与传统民间⾳乐有关，⽽且在当代著名作曲家中⾮常流' +
                            '⾏，例如 Sofia Gubaidulina、Magnus Lindberg、Toshio' +
                            'Hosakawa 等等。',
                            '古典⼿风琴有两种主要类型，可以通过右边不同的键盘来' +
                            '区分它们：按钮⼿风琴和钢琴⼿风琴。所有⼿风琴的左侧' +
                            '都有⽤于低⾳以及和弦的按钮键盘，按下转换器即可获得' +
                            '全部的单⾳。左侧的隐形的两套系统提供了很多演奏⾳乐' +
                            '的可能性，可以演奏从巴洛克到现代⾳乐各种时期的作' +
                            '品。⽽连接右⼿和左⼿的风箱，可以说是乐器的“灵魂”或' +
                            '“肺”，它通过控制风箱给⾳乐带来动态和呼吸。两侧的变' +
                            '⾳器扩展不同的⾳⾊和⼋度，使⼿风琴听起来像⼀个⼩型' +
                            '管弦乐队。',
                            '有机会探索古典⼿风琴将是⼀种特殊⽽独特的体验。从初' +
                            '级⽔平到⾼级⽔平，学⽣将获得专业学术⽔平的单独指' +
                            '导。对于初级⽔平的学⽣，本课程将引导他们完成正确的' +
                            '指法、清晰的发⾳、通过转换风箱产⽣优美动听的⾳⾊的' +
                            '⽬标。初级⽔平学⽣将使⽤由王⽼师与唱⽚公司 Da Capo' +
                            '和丹麦 Educate·S 出版社合作的原创古典⼿风琴教学书' +
                            '籍。除此之外，该课程还将包括⾳乐史上不同时期的改编' +
                            '作品。对于中级学⽣，课程将包括更多古典⼿风琴的原创' +
                            '作品，主要来⾃欧洲作曲家。除此之外，学⽣将参与室内' +
                            '乐作品的演奏并与其他⾳乐家合作。对于⾼级⽔平的学' +
                            '⽣，主要重点将是在欧洲和美国的⾳乐节和⾳乐会上以独' +
                            '奏、室内乐和协奏曲的形式表演和准备⾳乐会的可能性。' +
                            '每个参与古典⼿风琴的学⽣都有机会参加并被介绍到挪威' +
                            '的 Nordaccordion ⾳乐节，该⾳乐节被认为是世界上最重' +
                            '要的⼿风琴⾳乐节之⼀，有世界级的演奏家、⼿风琴教授' +
                            '和⾳乐会。',
                            '古典⼿风琴课程的⽬的是将⾳乐性和创造⼒融⼊⽇常的⾳' +
                            '乐学习中，并⽤⾃⼰的⾳乐语⾔在这种现代乐器上创作⾳' +
                            '乐，培养对演奏⾳乐的终⽣兴趣。'

                        ]
                    },
                ]
            },
            teacher: [
                {
                    id:'1',
                    name:'吴羿明',
                    introduction: '<p>吴羿明，自由作曲家，音乐教学家，中美美好艺术中心创办人。</p>\n' +
                        '<p>毕业于中国中央音乐学院作曲系（师从于徐振民、徐昌俊、董立强）、美国约翰•霍普金斯大学皮博迪音乐学院（师从于作曲系主任、罗马大奖获得者 Michael Hersch先生）。</p>\n' +
                        '<p>获奖经历：</p>\n' +
                        '<p>2006年，23岁首次由中国人参赛三管编制交响乐获日本武满彻国际作曲比赛三等奖；</p>\n' +
                        '<p>2008年获得比利时第三届赫尔贝克国际作曲比赛第二名；</p>\n' +
                        '<p>2010年获得德国巴伐利亚广播交响乐团宝马国际作曲奖。</p>\n' +
                        '<p>吴羿明原创音乐作品在东京爱乐乐团、比利时皇家管乐团、巴伐利亚广播交响乐团、北京交响乐团、美国Occasional Symphony交响乐团等全球演出。</p>\n' +
                        '<p>2017年吴羿明先生定居美国马里兰州，创立了美好艺术中心，以创意教学和文化交流培养年轻的音乐人才。 吴羿明先生一直倡导“用业余的学习达到专业的水平”。仅仅三年时间，通过他精心指导和学生们的刻苦努力，从2019年至2021年4月，有近30名学生在全美、国际比赛中获得130多个重要奖项。有的比赛属于美国或国际顶级作曲比赛，如：American Prize、西贝柳斯国际作曲比赛；有的比赛由政府举办（如：奥地利总理府、哈萨克斯坦文化部）；有的比赛由著名音乐学院举办（如：舒伯特音乐学院、维也纳音乐学院）；有的比赛由著名交响乐团举办（如：National Youth Orchestra in USA，the New Vienna Symphony in Austria）；还有些比赛由美国的音乐组织举办（如：The American Composers Forum， Nation Parent Teacher Association）</p>\n' +
                        '<p>很多比赛是没有年龄限制的专业比赛，参赛选手是音乐学院老师、音乐学院作曲系的学生、以及职业作曲家。而美好艺术中心的学生只是年龄8至17岁，课余学习作曲的小学、初中、高中生。尽管如此，在一些比赛里，美好艺术中心的获奖人数已经超过了音乐院校。</p>\n' +
                        '<p>2020年9月，美好艺术中心成立了网上音乐学校，同时也成立了美好艺术基金。</p>\n' +
                        '<p>2021年，美好艺术中心吸引了中美多位知名音乐家及音乐院校的教授加入。除作曲课之外，增加了西方音乐史、音乐理论、视唱练耳、乐器演奏等课程。学校网站在2021年4月正式上线，招生范围面向全世界的音乐爱好者。</p>\n' +
                        '<a href="wuyiming.org">wuyiming.org</a>'
                    ,
                    avator:'https://mayflower.s3.amazonaws.com/YimingW.jpg',
                },
                {
                    id:'2',
                    name:'王萌',
                    introduction: '<p>青年作曲家王萌毕业于中央音乐学院, 美国曼哈顿音乐学院, 现为辛辛那提大学音乐学院博士候选人。她的 作品曾在北美，欧洲，亚洲等多个重要场馆演出过，合作过的乐团包括美国辛辛那提交响乐团, 哥伦布交响乐团, 佛罗里达州Jacksonville交响乐团, 比利时布鲁塞尔爱乐，MSM作曲家管弦乐团, 上海交响乐团打击乐组，阿斯本当代乐团, Longleash 三重奏, F-Plus 当代室内乐团及加拿大 Thin Edge 新音乐团等。此外, 她的音乐还出现在国际一流的音乐节中,包括美国 Aspen 音乐节, Cabrillo 音乐节，Bowdoin 国际音乐节,比利时TACTUS 国际青年作曲家论坛，美国作曲家乐团 EarShot Reading, 美国中西部作曲家研讨会及北京现代音乐节等。最近的委约包括为ccm concert orchestra 创作的钢琴协奏曲，将于2022年3月首演。</p>',
                    avator: 'https://mayflower.s3.amazonaws.com/WangM.jpg'
                },
                {
                    id:'3',
                    name:'钱慎瀛',
                    introduction: '<p>钱慎瀛,江苏南通人。1996年随邓尔博先生学习作曲；1998年至2009年就读上海音乐学院（附中、本科）期间先后师从岳淼、陈钢和朱世瑞先生。2010年破格受聘南京艺术学院音乐学院任教。2011年至2014年获国家留学基金委公派赴瑞士日内瓦音乐学院攻读研究生，随Michael Jarrell研习作曲。2015年受聘上海音乐学院作曲系。所带课程包括《作曲主课》、《当代音乐》和《和声学》等。</p>\n' +
                        '\n' +
                        '<p>他的音乐创作受自然现象和中国传统哲学启发，从文学、视觉和建筑艺术人文内涵的特殊符号形式中获取灵感，在音响构筑过程中思索与表达矛盾。</p>\n' +
                        '\n' +
                        '<p>他先后获得包括2008比利时伊丽莎白王后Queen Elisabeth作曲决赛奖（前四名）、第十二届罗马尼亚文化部乔治·埃内斯库George Enescu国际作曲比赛室内乐唯一大奖和第十四届意大利阿弗雷德·卡塞拉Alfredo Casella国际作曲比赛唯一大奖在内的许多国内外重大比赛奖项。因两次在中国文化部鼓励参加的一类国际比赛中获奖，2010年获得由文化部特颁的证书与奖金。其部分作品总谱由意大利CASA RICORDI和上海音乐出版社出版。其主导的创作项目2017、2019年两次获得国家艺术基金资助。</p>\n' +
                        '\n' +
                        '<p>他的作品多次受邀在国内外上演，演奏者包括苏州交响乐团、上海爱乐乐团、香港创乐团、德国法兰克福广播交响乐团、法国洛林国家交响乐团、瑞士日内瓦室内交响乐团、Ensemble Modern、Ensemble Contrechamps、Plural Ensemble、奥地利20世纪室内乐团、意大利Cremona四重奏等。</p>\n' +
                        '\n',
                    avator: 'https://mayflower.s3.amazonaws.com/ShenyingQ.jpg'
                }
            ],
            honor:{
                breadcrumb:['主页','荣誉'],
            },
            foundation:{
                breadcrumb:['主页','艺术基金'],
                content:'<h5> 美好艺术基金会 </h5>\n' +
                    '<p>美好艺术基金会，是由美好艺术中心设立的非盈利组织。它的具体职能为：筹办美好艺术中心获奖学员的作品音乐会、筹办文化交流音乐会、以及音乐大师班讲座、优秀学员奖学金。</p>\n' +
                    '<p>学员获奖作品音乐会：美好艺术中心学员在国际以及全美作曲比赛中的获奖曲目，将由专业的演奏人员进行演出。音乐会的举办，不仅可以提高学员艺术实践的能力，也能丰富学员的履历。</p>\n' +
                    '<p>文化交流音乐会：美好艺术中心将邀请世界上最优秀的青年作曲家进行曲目的创作，并在美国首演。这是一场文化交流的音乐盛宴，探索音乐创作的可能性，推动世界音乐的共同繁荣。</p>\n' +
                    '<p>音乐大师班讲座：邀请知名音乐家为美好艺术中心学员进行公益讲座。通过音乐大师对音乐的理解、创作方法、演出经验等方面的分享，启发和提升学员对音乐创作的思路和眼界。</p>\n' +
                    '<p>优秀学员奖学金：为音乐艺术方面获得优异成绩的学生颁发奖学金。</p>\n' +
                    '<p>美好艺术基金会的资金来源：美好艺术中心、艺术中心学员家长捐助、社会捐助。</p>\n'

            },
            musicProduction:{
                breadcrumb:['主页','音乐制作'],
                content:'<h5>音乐制作</h5>\n' +
                    '<p>    美好艺术中心旗下拥有国际级作曲水准的中青年作曲家的强大阵容，以雄厚的创作能力，积累了交响乐、影视音乐、歌舞剧、个人/企业歌曲等音乐创作方面的丰富制作经验，承接各类原创音乐制作，音乐作品的改编，将高品质、国际化的音乐作品与全球更多的听众分享。</p>'
            },
            oversea:{
                breadcrumb:['主页','音乐留学 '],
                content:'<h5>音乐留学 </h5>\n' +
                    '<p>我们拥有美国顶尖音乐学院的留学资讯及录取技巧，也有常青藤盟校作曲系双专业的量身定制方案。不同于传统中介，团队成员都毕业于海外顶尖院校，能给予学生最专业的音乐教育及职业规划，也与各名校导师联系密切，利用本土化优势，拥着宝贵的推荐录取资源。</p>'
            },
            contact:{
                breadcrumb:['主页','联系我们']
            },
            news:{
                content:[
                    {
                        id:'1',
                        title:'Nicole Liang的弦乐四重奏获得了 Junior Composers Contest马里兰州第一名\n',
                        date:'3/8/2021',
                        summary:'美好艺术中心的学员Nicole Liang获得了National Federation of Music Clubs作曲比赛的马里兰州第一名，并将作为马里兰州的唯一代表参加美国东部区的比赛，恭喜！',
                        content:{
                            text:'<p>美好艺术中心的学员Nicole Liang获得了National Federation of Music Clubs作曲比赛的马里兰州第一名，并将作为马里兰州的唯一代表参加美国东部区的比赛，恭喜！</p>\n' +
                                ' <p>2020年全美共有700多人参加此项比赛，先在各州选出州冠军，再到全国选出前三名。这是一项竞争非常激烈的比赛，预祝Nicole Liang同学能够在全国获奖。也希望美好艺术中心明年能有更多的学生得到州冠军，并在全国斩获名次。</p>\n',
                            image:'https://mayflower.s3.amazonaws.com/news3.jpg',
                        }
                    },
                    {
                        id:'2',
                        title:'David Lu和 Nicole Liang的室内乐作品入围美国最权威的American Prize的半决赛',
                        date:'3/5/2021',
                        summary:'喜报！！！美好艺术中心两位学员David Lu和Nicole Liang的室内乐作品入围美国最权威的American Prize的半决赛。',
                        content:{
                            text:'  <p>  喜报！！！美好艺术中心两位学员David Lu和Nicole Liang的室内乐作品入围美国最权威的American Prize的半决赛。他（她）们俩位都是十年级的高中生，同样入围室内乐半决赛的其它选手大多为作曲专业博士，而职业组的入围选手很多人已经是知名大学和音乐学院的教授了。</p>\n' +
                                '    <p> American Prize是美国最权威的音乐奖项，也包含了所有乐器和声乐。能在高中得到American Prize的音乐家，都是美国最优秀的年轻音乐家。此次获奖也为David Lu和Nicole Liang未来进入常春藤大学打下了坚实的基础。这两位学生都来自马里兰州的Howard County，师从于吴羿明老师。再次恭喜！</p>\n' +
                                '    <p>得奖结果官方网址：<a>http://theamericanprize.blogspot.com/2021/02/semi-finalists-composers-instrumental.html?m=1</a></p>\n'
                        }
                    },
                    {
                        id:'3',
                        title:'Lucy Chen、Jenny Yu、Austine Zhang在第23届Tribeca 新音乐青年作曲比赛中获奖',
                        date:'2/22/2021',
                        summary:'    第23届Tribeca 新音乐青年作曲比赛结果揭晓，美好艺术中心学员Lucy Chen，Jenny Yu，Austine Zhang获得了Emerging Composer大奖！',
                        content:{
                            text:'<p>第23届Tribeca 新音乐青年作曲比赛结果揭晓，美好艺术中心学员Lucy Chen，Jenny Yu，Austine Zhang获得了Emerging Composer大奖！</p>\n' +
                                '<p>此项比赛是由纽约举办的全国作曲比赛，去年的第一名是茱莉亚音乐学院(The Juilliard School）的本科学生，师从朱莉娅音乐学院系主任罗比特.比色（Robert Beaser）。而今年的第一名是印第安纳大学音乐学院（Indiana University Jacobs School of Music）的本科生，师从印第安纳音乐学院作曲系系主任David Dzubay。</p>\n' +
                                '<p>去年美好艺术中心的Emily Bai获得了Emerging Composer荣誉。今年全国参赛人数近300人，共27人获奖，美好艺术中心有3人获奖，占全国获奖人数的1/9，恭喜！其中Austine Zhang 11年级，Lucy Chen 10年级，而Jenny Yu只有8岁，她们平均学习作曲的时间仅为一年。</p>\n' +
                                '<p>与世界一流音乐学院的专业选手同台过招，有助于提升我们艺术中心学员的整体水平。再次祝贺获奖学员！</p>\n' +
                                '<p>得奖结果官方网址：<a>https://www.tribecanewmusic.org/2020-division-2-results</a></p>\n'
                        }
                    },
                    {
                        id:'4',
                        title:'2021年金钥匙国际作曲比赛结果公布，美好艺术中心摘得23个奖项',
                        date:'1/7/2021',
                        summary:'在日前公布的2021金钥匙国际作曲比赛里，美好艺术中心共有22名学员获得23个奖项。',
                        content: {
                            text:'<div><p>在日前公布的2021金钥匙国际作曲比赛里，美好艺术中心共有22名学员获得23个奖项。其中，美好艺术中心王萌老师的学生Melinda Meihua Liu获得Elementary National组第一名，Andrew Liu获得Senior National组的荣誉奖。</p><p>         王萌老师在2020年加入美好艺术中心，目前担任教学主管，也是音乐理论课和作曲课的老师。恭喜王萌老师及获奖学员！</p>' +
                                '<p>得奖结果官方网址: <a href="www.goldenkeyfestival.com/winners-2021/">www.goldenkeyfestival.com/winners-2021/</a></p></div>',
                            formData: {
                                header:['#', 'Category','Name','Winning Place',	'Instructor'],
                                content:[
                                    {
                                        "id": 1,
                                        "category": "Elementary International",
                                        "name": "Aria Song",
                                        "place": "Third",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 2,
                                        "category": "Elementary National",
                                        "name": "Melinda Meihua Liu",
                                        "place": "First",
                                        "instructor": "Meng Wang"
                                    },
                                    {
                                        "id": 3,
                                        "category": "",
                                        "name": "Joanna Qian Mo",
                                        "place": "Third",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 4,
                                        "category": "",
                                        "name": "Jenny Yu",
                                        "place": "Fourth",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 5,
                                        "category": "Junior International",
                                        "name": "Li Yixuan",
                                        "place": "Fourth",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 6,
                                        "category": "",
                                        "name": "Emily Bai",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 7,
                                        "category": "",
                                        "name": "Julia Wang Lu",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 8,
                                        "category": "Junior National",
                                        "name": "Qingyang Zhang",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 9,
                                        "category": "",
                                        "name": "Charles Chen",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 10,
                                        "category": "",
                                        "name": "Albert Lu",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 11,
                                        "category": "Senior International",
                                        "name": "David Li",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 12,
                                        "category": "",
                                        "name": "Yihong Song",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 13,
                                        "category": "",
                                        "name": "Qingran Li",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 14,
                                        "category": "",
                                        "name": "Austin Zhang",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 15,
                                        "category": "",
                                        "name": "Ammy Yuan",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 16,
                                        "category": "Senior National",
                                        "name": "David Lu Wang",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 17,
                                        "category": "",
                                        "name": "Lucy Liu Chen",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 18,
                                        "category": "",
                                        "name": "Taohan Wang",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 19,
                                        "category": "",
                                        "name": "Sean Wang",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 20,
                                        "category": "",
                                        "name": "Cassi Chen",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 21,
                                        "category": "",
                                        "name": "Ammy Yuan",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 22,
                                        "category": "",
                                        "name": "Grace Ma",
                                        "place": "Honorable Mention",
                                        "instructor": "Yiming Wu"
                                    },
                                    {
                                        "id": 23,
                                        "category": "",
                                        "name": "Andrew Liu",
                                        "place": "Honorable Mention",
                                        "instructor": "Meng Wang"
                                    }
                                ]
                            }
                        }
                    },
                    {
                        id:'5',
                        title:'Lucy Chen、Grace Ma、Cassi Chen获得2020-2021 MYO交响乐大奖',
                        date:'1/24/2021',
                        summary:'在美国纽约大都会交响乐团举办的11/24/2020-2021全国交响乐作曲比赛里面,该组奖项设置一二三各一名，荣誉奖三名，共6个奖项，美好艺术中心获得其中3个',
                        content:{
                            text:'<p>在美国纽约大都会交响乐团举办的2020-2021全国交响乐作曲比赛里面，来自马里兰州的Lucy Chen获得了青年组第二名，Grace Ma和Cassi Chen获得了Honorable Mention。这是美国的顶级作曲比赛，美好艺术中心的获奖数量占据了该组奖项的半壁江山。该组奖项设置一二三各一名，荣誉奖三名，共6个奖项，美好艺术中心获得其中3个。</p>' +
                                '<p>去年美好艺术中心学员Max Lu获得了第二名。本次获奖3位学生均来自Potomac的Winston Churchill High学校，指导教师为美好艺术中心的吴羿明老师。她们的获奖交响乐作品将由纽约大都会青年交响乐团在卡内基音乐厅首演。再次恭喜！</p>' +
                                '<p>得奖结果官方网址：<a href="http://www.myo.org/myo-programs/emerging-composers-competition/">http://www.myo.org/myo-programs/emerging-composers-competition/</a></p>'
                        }
                    },
                    {
                        id:'6',
                        title:'美好艺术中心喜获十项芬兰西贝柳斯国际作曲比赛大奖',
                        date:'11/24/2020',
                        summary:'    近日，2020年西贝柳斯国际作曲比赛结果揭晓,这次来自美好艺术中心的参赛学生几乎全部获奖！',
                        content:{
                            text:'CN'
                        }
                    },
                    {
                        id:'7',
                        title:'美好艺术中心包揽CCPA全美青年作曲比赛的前三名',
                        date:'2/4/2021',
                        summary:' 由罗斯福大学芝加哥音乐学院举办的CCPA全国青年作曲比赛结果刚刚揭晓。美好艺术中心的学生Lucy Chen，Cassi Chen，Austine Zhang分别获得前三名',
                        content:{
                            text:'<p>由罗斯福大学芝加哥音乐学院举办的CCPA全国青年作曲比赛结果刚刚揭晓。\n' +
                                '美好艺术中心的学生Lucy Chen，Cassi Chen，Austine Zhang分别获得前三名，包揽了全部奖项，实现了大满贯。其中Lucy Chen和Cassi Chen来自马里兰州蒙郡，Austine Zhang来自马里兰州哈维郡。\n</p>' +
                                '<p>她们将得到现金奖励，并且第一名Lucy Chen的作品将在4月28日进行全球首演。他们的指导老师为吴羿明，三位学生平均学习作曲时间一年左右。再次恭喜！</p>'
                        }
                    },
                ],
                breadcrumb:['主页','新闻']
            }
        }
    },
};

const i18n = (rfc4646) => {
    return contentList[rfc4646] ? contentList[rfc4646] : contentList.en;
};

export { i18n };
