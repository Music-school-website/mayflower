import React from "react";

const contentList = {
    'en': {
        page:{
            language:'English',
            remind:'Switching the language',
            home:{

            },

            pageHeader:{
                home:'Home',
                course:'Course',
                introduction:'Introduction',
                honor:'Honor',
                foundation:'Foundation',
                contact:'Contact'
            },

            introduction:{
                breadcrumb:['Home','Introduction'],
                title:'Our Stories',
                summary:'The Sino-American Mayflower Art Center ( hereafter, “the Art Center”) is located at Howard county in Maryland. Mr. Yiming Wu, the founder of the Arts Center, he is a excellent professional composer from China.',
                content:<div>

                    <p>In 2017, Mr.Wu and his family immigrated to Maryland, USA, then founded the Art Center. He has developed a unique teaching method for composition and actively cultivates creative composers for the local.</p>
                    <p>
                        Mr. Yiming Wu has been proposing the idea of “achieving professional level with spare-time learning.” Through the meticulous guidance of Mr. Yiming Wu and the hard work of the students, from 2019 to December 2020, 21 students of the Art Center have won prizes from 64 important composition competitions.
                    </p>
                    <p>
                        Some competitions are the top professional competition(such as: JSFest Composition Competition). Some composition competition are professional competition without age limit. The winners include professional composers, undergraduate/master/Ph.D. students in composition, even professors from Central Conservatory of Music. In comparison, the winners from the Arts Center are students in elementary, middle or high school (ages between 9and 17). They learn composition with their spare time after school. Some of them have only learned composition for a few months! In some of these competitions, the number of award winners from the Arts Center surpassed the number from other music schools.
                    </p>
                    <p>
                        “Winning awards is not the goal,” Mr. Wu said, “but a way to strengthen students’ self-confidence, expand their horizon, and stimulate their creativity so that they are more prepared for their double major studies in Ivy League schools.” After winning several top-tier national and international composition competitions, Max Lu, a student from the Arts Center, has been accepted by Columbia University this year.
                    </p>
                    <p>
                        In the past two years，the student body of the Arts Center keeps growing! We have more than 30 students from Maryland. Recently, new students from Virginia, Washington D.C., New York, Texas, Singapore and China are also joining us.
                    </p>
                    <p>
                        the Arts Center established an online school in September this year, invited 3 excellent new teachers, and added Music Theory，Aural skills and Western Music History courses.
                        In the future, we plan to invite new teachers so that our curricula and training can be more systematic, diversified, and scientific. Just like our name, Mayflower, the Arts Center will keep helping more rising stars to prepare for the adventures of their life and career!
                    </p>
                </div>
            },
            courses:{
                breadcrumb:['Home','Courses'],
            },
            honor:{
                breadcrumb:['Home','Honors'],
            },
            foundation:{
                breadcrumb:['Home','Foundation']
            },
            contact:{
                breadcrumb:['Home','Contact']
            }
        }

    },
    'zh': {
        page:{
            language:'中文',
            remind:'正在切换语言',
            home:{

            },
            pageHeader:{
                home:'主页',
                course:'课程介绍',
                introduction:'关于我们',
                honor:'荣誉',
                foundation: '艺术基金',
                contact:'联系我们'
            },
            introduction:{
                breadcrumb:['主页','关于我们'],
                title:'',
                summary:'美好艺术中心，坐落于马里兰州哈维郡。它的创办人吴羿明先生，来自中国，是位优秀的职业作曲家。',
                content:<div>
                    <p> 2017年，吴羿明先生全家从中国移民至马里兰州，创立了中美美好艺术中心。他研发出独到的作曲教学方法，为本地积极培养有创造天赋的作曲人才。</p>
                    <p>
                        吴羿明先生一直倡导“用业余的学习达到专业的水平”。短短2年，通过他精心指导和学生们的刻苦努力，2019年至2020年10月，共有15名学生在国内国际比赛中获得46个重要奖项。有的比赛由政府举办（如：奥地利总理府、哈萨克斯坦文化部）；有的比赛由著名音乐学院举办（如：舒伯特音乐学院、维也纳音乐学院）；有的比赛由著名交响乐团举办（如：National Youth Orchestra in USA，the New Vienna Symphony in Austria）；还有些比赛由美国的音乐组织举办（如：The American Composers Forum， Nation Parent Teacher Association）。
                    </p>
                    <p>
                        很多比赛是没有年龄限制的专业比赛，参赛选手是音乐学院老师、音乐学院作曲系的学生、以及职业作曲家。而美好艺术中心的学生只是年龄9至17岁，课余学习作曲的小学、初中、高中生。尽管如此，在一些比赛里，美好艺术中心的获奖人数已经超过了音乐院校。
                    </p>
                    <p>
                        吴羿明先生说过：得奖不是目的，而是通过得奖来提升孩子们的自信、眼界和创造力，帮助他们改变命运，为他们进入藤校读取双专业，打下坚实基础。美好中心的学员Max Lu，在获得了多项全美、国际顶尖作曲比赛大奖后，今年已经成功地被哥伦比亚大学录取。
                    </p>
                    <p>
                        美好艺术中心创办2年多以来，从最初的2名学生到现在拥有学生30多人。学生年龄从5岁到17岁，学生的所在地域，从最初的马里兰州，扩展到了弗吉尼亚州、华盛顿DC、纽约、德克萨斯州、新加坡、中国等。
                    </p>
                    <p>
                        美好艺术中心今年9月成立了网上学校，引入了2名新的老师，增加了音乐理论、西方音乐史课程。未来，美好艺术中心还会引入更多优秀的老师，设置更加丰富、系统、科学的音乐课程，帮助更多的音乐爱好者成为天才。
                    </p>
                </div>
            },
            courses:{
                breadcrumb:['主页','课程'],
            },
            honor:{
                breadcrumb:['主页','荣誉'],
            },
            foundation:{
                breadcrumb:['主页','艺术基金']
            },
            contact:{
                breadcrumb:['主页','联系我们']
            }
        }
    },
};

const i18n = (rfc4646) => {
    return contentList[rfc4646] ? contentList[rfc4646] : contentList.en;
};

export { i18n };
