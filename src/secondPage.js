import './secondPage.css';import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'


function SecondPage () {
    return (
        <div className='main-2' id='about'>
            <header className='about-us-header'>
                <p className='about-us-header-text'>About Us</p>
            </header>
            <section className='svg-section-container'>
                
                <section className='svg-section'>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" data-name="Layer 1" className='img-1' viewBox="0 0 751.13137 556.41471"><path d="M745.31929,704.7429H904.58493a0,0,0,0,1,0,0v4.88731a16,16,0,0,1-16,16H761.31927a16,16,0,0,1-16-16V704.7429A0,0,0,0,1,745.31929,704.7429Z" transform="translate(1425.4699 1258.58046) rotate(-180)" fill="#e6e6e6"/><path d="M821.22506,705.71817l4.84319-1.95053c-50.67694-125.78911-45.79487-284.48233-2.9564-420.6131a85.00544,85.00544,0,0,0-24.76415-89.93432c-24.86485-22.18892-59.14455-27.59433-89.46708-14.10823-29.93051,13.314-34.056,36.505-34.056,59.58311h5.22183c0-24.63475,5.26453-43.38347,30.95677-54.81195,28.41917-12.63895,60.55455-7.56947,83.86726,13.23368A79.83855,79.83855,0,0,1,818.131,281.58647C774.79786,419.28913,770.202,579.07236,821.22506,705.71817Z" transform="translate(-224.43432 -171.79265)" fill="#e6e6e6"/><circle cx="454.30672" cy="125.64797" r="18.27638" fill="#e6e6e6"/><path d="M650.59371,329.30158V294.6722h5.38462v34.62938a7.17949,7.17949,0,1,1-5.38462,0Z" transform="translate(-224.43432 -171.79265)" fill="#e6e6e6"/><path d="M624.56456,268.06762a30.05968,30.05968,0,0,1,30.02549-30.02549h49.60733a30.02549,30.02549,0,1,1,0,60.051H654.59005A30.05968,30.05968,0,0,1,624.56456,268.06762Z" transform="translate(-224.43432 -171.79265)" fill="#c94e02"/><path d="M554.66992,454.00457c4.98069-63.72268,30.44665-94.08347,14.14038-113.123-15.61943-18.23757-59.61664-14.47019-87.87233,3.03008-76.21224,47.20238-104.13353,235.33248-6.06016,327.24868C568.07246,758.50409,744.69459,730.52967,783.946,659.04c9.15849-16.6806,16.43412-45.92231,3.03008-63.63168-33.27833-43.96718-154.271,35.66934-208.06552-14.14038C547.03,551.749,551.93653,488.97545,554.66992,454.00457Z" transform="translate(-224.43432 -171.79265)" fill="#3f3d56"/><path d="M612.92744,422.34673a7.82192,7.82192,0,0,0-3.92393,10.1798,7.50441,7.50441,0,0,0,.59726,1.08727l-16.35806,21.84173,8.16253,12.19983,19.17365-32.34318a7.80022,7.80022,0,0,0,2.37337-9.22241,7.4648,7.4648,0,0,0-9.83829-3.82815Q613.02013,422.3029,612.92744,422.34673Z" transform="translate(-224.43432 -171.79265)" fill="#ffb6b6"/><path d="M612.91423,460.00518c1.07063.94943-1.89886,2.12109-5.04.27273-.89894-.53529-1.28276-.75752-1.38374-.6161-.2525.35348,1.2221,2.95937.82823,8.7468-.24245,3.45434-5.9794,9.9488-12.49408,16.28163-8.80741,8.56507-19.04909,16.82708-19.04909,16.82708l-3.5957-2.87862-37.70431-30.23009-6.36316-8.8074a62.68137,62.68137,0,0,1,2.616-10.23158,111.54646,111.54646,0,0,1,5.67634-13.47378c1.1716-2.37354,2.37354-4.636,3.525-6.71665l20.20054,22.261,16.92806,18.64512s4.92893-7.9388,8.7468-10.10027a3.636,3.636,0,0,1,1.61608-.5555c3.85831-.18186,4.0906-2.28267-.38381-6.85812-4.47441-4.57539,1.1716-.303,5.15111-1.5352,3.97951-1.23227,0,0,.83834-3.08063.83834-3.08057,11.99912-9.26193,11.99912-9.26193l.46464.41408,8.4337,7.444,2.414,2.13114s-2.63622,7.23176-3.36341,8.75691C612.24758,458.96488,611.85371,459.0457,612.91423,460.00518Z" transform="translate(-224.43432 -171.79265)" fill="#c94e02"/><polygon points="610.804 428.521 611.215 417.38 568.439 410.493 567.832 426.935 610.804 428.521" fill="#ffb6b6"/><path d="M827.47338,603.66775l-.40561-17.83786,7.62572.28138,12.31109-16.49047a4.76656,4.76656,0,0,1,8.58321,3.02706l-.78187,21.19-7.67777,3.37409,7.49039,1.70441-.2948,7.98946Z" transform="translate(-224.43432 -171.79265)" fill="#2f2e41"/><path d="M594.489,604.65109l135.48815,3.43539s58.5083,3.37942,72.23573-5.55075l14.47608-1.82755.78459-21.26375s-8.85213.06528-13.94155-2.306-1.55231-5.27294-6.40475-2.41985-4.33986,3.19622-8.0916,1.885S613.24054,549.0691,613.24054,549.0691Z" transform="translate(-224.43432 -171.79265)" fill="#2f2e41"/><polygon points="548.592 423.631 556.471 415.744 529.796 381.601 518.168 393.243 548.592 423.631" fill="#ffb6b6"/><path d="M765.05289,588.56186l11.83461-13.35273,5.399,5.39271,20.24079-3.716a4.76655,4.76655,0,0,1,4.23354,8.05677l-14.985,15.00253-7.92335-2.7483,4.332,6.34388-5.64994,5.65656Z" transform="translate(-224.43432 -171.79265)" fill="#2f2e41"/><path d="M541.03514,530.44917l1.347,31.31039c1.58568,36.85938,42.178,59.168,73.65429,39.923q.8702-.532,1.74621-1.10227s11.93274-3.20452,11.57052-8.27942,2.5529-7.5448,5.1327-6.16087,36.357-46.55255,36.357-46.55255,70.17819,35.00629,85.66005,43.247c0,0,14.556-22.75905,13.50069-22.52046s-86.81888-59.78843-86.81888-59.78843-13.97191-14.14036-31.30356-4.804c-.361,1.37144-.05237,1.41923-.05237,1.41923l-57.25272,46.65174-8.08973-15.36335Z" transform="translate(-224.43432 -171.79265)" fill="#2f2e41"/><path d="M595.01652,491.306a32.35389,32.35389,0,0,1-.6161,4.30266,25.39005,25.39005,0,0,1-1.97961,5.939s0,2.111-4.04011,9.18117,1.01,4.0401,4.04011,9.29226c3.03008,5.242,0,2.82806-3.36341,6.20151a7.7216,7.7216,0,0,0-1.909,7.60553s-43.39078.03033-51.471-2.99975-9.91841-20.09955-2.67653-21.78628c7.23176-1.68679-2.19175-3.36341-6.444-7.252-4.25224-3.88864,4.25223-10.25179,4.25223-10.25179s-3.50482-6.05-3.21193-26.36168a40.02917,40.02917,0,0,1,.51512-5.57536,62.68137,62.68137,0,0,1,2.616-10.23158,111.54646,111.54646,0,0,1,5.67634-13.47378c1.1716-2.37354,2.37354-4.636,3.525-6.71665.1818-.32321.35349-.63632.53535-.94942,2.19174-3.87853,4.19157-7.05,5.51471-9.08013,1.02013-1.57564,1.63623-2.46447,1.63623-2.46447l7.353-12.787,24.54364,11.50422-1.39385,18.81681,4.232,14.19086,1.94934,6.53491,1.50493,5.04,2.32311,7.80749s-.63632.03033.1212,1.07062a34.48445,34.48445,0,0,1,6.57523,15.82711A32.22705,32.22705,0,0,1,595.01652,491.306Z" transform="translate(-224.43432 -171.79265)" fill="#c94e02"/><path d="M665.89583,493.33387l-.46062-.1489-58.74434-18.91675,21.64693-71.01669a9.76773,9.76773,0,0,1,14.31159-5.56184l37.5399,22.17917a14.71548,14.71548,0,0,1,6.31875,17.78792Z" transform="translate(-224.43432 -171.79265)" fill="#2f2e41"/><path d="M666.13449,497.84853l-59.21706-19.069,21.64693-71.01669A9.76774,9.76774,0,0,1,642.876,402.201l39.33218,19.63747c5.909,3.4901,5.77083,12.5236,3.0271,19.93565Z" transform="translate(-224.43432 -171.79265)" fill="#c94e02"/><path d="M660.20576,502.98871a11.29067,11.29067,0,0,1-9.05.90014l-37.85-12.189A11.70354,11.70354,0,0,1,605.7309,477.21l18.9763-62.255a9.767,9.767,0,0,1,12.3904-6.43128l39.22419,12.879a14.72181,14.72181,0,0,1,9.26517,18.95877l-20.28935,56.56519A11.30443,11.30443,0,0,1,660.20576,502.98871Z" transform="translate(-224.43432 -171.79265)" fill="#3f3d56"/><circle cx="353.69078" cy="205.21392" r="27.11003" fill="#ffb6b6"/><path d="M486.45161,404.525a23.51079,23.51079,0,0,0,11.54593,10.79338,27.03309,27.03309,0,0,0,6.22181,1.96918,24.32592,24.32592,0,0,1,2.87928-6.81569,20.083,20.083,0,0,0,0,7.19949,23.90012,23.90012,0,0,0,9.66306-1.19949,20.72563,20.72563,0,0,0,13.03373-13.2043c2.15964-7.18605-.16652-14.86126-.34976-22.36206-.18876-7.50161,3.3734-16.47382,10.82029-17.402,5.67126-.708,4.96994-.15829,9.045,3.84815-5.70016,6.332,8.19607,34.37709,15.65267,33.13789,4.21581-.70062,7.31811-4.04765,8.15195-3.9316,4.26951,10.45617-8.57381,25.28562,1.61266,30.15385l-.75583-1.00022c-5.33192-8.80838,10.44513-23.68549,5.11318-32.49391-1.4865-2.46411-3.03207-5.353-2.11235-8.07886.87294-2.5917,5.29326-3.41192,6.2259-1.05306-1.51608-5.40656,2.71634-11.75247,8.33769-12.30423,4.994-.49271,4.7058.93072,9.46731,2.22945a24.29314,24.29314,0,0,1,2.60765-5.83464,19.91791,19.91791,0,0,0-.13887,6.29644,7.85474,7.85474,0,0,0,4.9415-1.046c4.3972-2.636,4.52795-9.44015,1.50733-13.5813-3.02616-4.14191-8.09474-6.187-12.98486-7.73444-.04495-10.34157-27.8717-15.29232-32.98954-5.67751-.52649-7.785-9.45039-13.02916-17.13792-11.7067s-13.7522,7.48658-17.44971,14.35725c-3.69673,6.86515-5.53208,14.55228-8.23846,21.86485s-6.575,14.60413-13.05555,18.94285c-6.47973,4.33319-16.10945,4.72678-21.51973-.88963A17.16757,17.16757,0,0,0,486.45161,404.525Z" transform="translate(-224.43432 -171.79265)" fill="#2f2e41"/><path d="M514.26881,528.49752a9.78761,9.78761,0,0,1,1.81465-1.14924c10.37663-5.16441,42.64546-18.5698,67.8772-18.01975,48.54787,1.05833,110.33162,54.63715,95.95255,90.617-10.94126,27.37774-65.33636,42.95393-105.04279,30.49612C519.2446,612.98915,497.28848,542.03634,514.26881,528.49752Z" transform="translate(-224.43432 -171.79265)" fill="#3f3d56"/><path d="M312.726,725.73322c-15.8635-2.9927-29.90557-74.46031,1.30546-109.65831,10.69336-12.05937,24.03189-17.30805,41.77459-22.19275,102.12134-28.11479,180.01109-1.32017,190.47828,5.22183,10.44365,6.52728,28.75241,104.87528,5.34013,118.79649-13.17287,7.83274-39.282,11.74911-52.21825,2.61092-19.03473-13.44617,12.91529-48.32363-1.30545-71.80009C481.96331,622.07058,396.986,613.097,354.38233,639.57312,308.92857,667.82042,402.6842,742.70415,312.726,725.73322Z" transform="translate(-224.43432 -171.79265)" fill="#f2f2f2"/><path d="M418.78727,604.22282H358.183c-14.96069-14.33791-25.65758-28.156-17.09352-39.62591a12.43165,12.43165,0,0,1,12.43164-12.43164h69.928a12.43166,12.43166,0,0,1,12.43165,12.43164C439.14142,577.66629,433.31617,590.8769,418.78727,604.22282Z" transform="translate(-224.43432 -171.79265)" fill="#ccc"/><path d="M407.90325,536.515a2.80741,2.80741,0,0,1-2.03464-4.86592l.19237-.76477q-.038-.09188-.07643-.18358a7.5391,7.5391,0,0,0-13.90674.05167c-2.27452,5.4781-5.17037,10.96553-5.8834,16.75771a22.30361,22.30361,0,0,0,.39152,7.67061A89.41955,89.41955,0,0,1,378.4518,518.042a86.307,86.307,0,0,1,.53535-9.6283q.44351-3.93126,1.23056-7.80652a90.4555,90.4555,0,0,1,17.93811-38.33731,24.07269,24.07269,0,0,0,10.01181-10.38735,18.36288,18.36288,0,0,0,1.67-5.0179c-.48739.06393-1.83779-7.3591-1.47018-7.81452-.67924-1.03072-1.895-1.54307-2.6368-2.54885-3.68944-5.00211-8.77254-4.12872-11.42613,2.66875-5.66869,2.861-5.72356,7.60578-2.24528,12.16916,2.2129,2.90325,2.517,6.83168,4.45862,9.93984-.1998.25572-.40756.50345-.6073.75916a91.03942,91.03942,0,0,0-9.50222,15.05379,37.846,37.846,0,0,0-2.25945-17.5787c-2.16269-5.21725-6.21632-9.61123-9.786-14.12154-4.28781-5.41757-13.08034-3.05323-13.83576,3.81439q-.011.09975-.02141.19942.79533.44867,1.55706.95246a3.808,3.808,0,0,1-1.53533,6.92993l-.07765.012a37.88985,37.88985,0,0,0,.99877,5.66515c-4.5795,17.71008,5.3073,24.16047,19.42431,24.45023.31164.15978.61532.31957.92695.47144a92.9244,92.9244,0,0,0-5.00193,23.53931,88.13549,88.13549,0,0,0,.06393,14.23066l-.024-.16778a23.28912,23.28912,0,0,0-7.95036-13.44763c-6.11821-5.0259-14.76211-6.87667-21.36258-10.9165a4.37072,4.37072,0,0,0-6.69422,4.252q.01327.08818.027.17642a25.578,25.578,0,0,1,2.86848,1.38225q.79533.44877,1.55706.95247a3.80809,3.80809,0,0,1-1.53533,6.93l-.07771.01193c-.05591.008-.10388.016-.15973.024a37.923,37.923,0,0,0,6.97545,10.92265c2.86344,15.46021,15.162,16.927,28.31753,12.42487h.008a92.89706,92.89706,0,0,0,6.24044,18.21782h22.2928c.08-.24769.15184-.50341.22378-.75114a25.32893,25.32893,0,0,1-6.16855-.36745c1.654-2.02957,3.308-4.07512,4.962-6.10463a1.38378,1.38378,0,0,0,.10387-.11986c.839-1.03867,1.68595-2.06946,2.52492-3.10817l.00044-.00126a37.1011,37.1011,0,0,0-1.08711-9.45126Z" transform="translate(-224.43432 -171.79265)" fill="#ccc"/><path d="M483.93975,600.9756a5.3847,5.3847,0,0,0,5.18906,3.63473l22.23279-.57217a5.31108,5.31108,0,0,0,5.01933-3.9083l3.14618-33.64248a8.21958,8.21958,0,0,0,3.55661.73079,8.1081,8.1081,0,0,0-.40694-16.2111,6.86892,6.86892,0,0,0-1.45706.15154,5.495,5.495,0,0,0-4.09046-1.76494l-34.19915.88312a4.91207,4.91207,0,0,0-.84358.10473,5.34133,5.34133,0,0,0-4.08973,6.93595Zm36.23256-36.7725,2.23876-8.017a5.46025,5.46025,0,0,0,.01709-2.83205c.10863-.00029.20446-.05177.31309-.05206a5.79951,5.79951,0,0,1,.27155,11.59579A5.45943,5.45943,0,0,1,520.17231,564.2031Z" transform="translate(-224.43432 -171.79265)" fill="#ccc"/><path d="M482.08653,550.38152c.7286,4.166,8.92027,7.09477,18.77014,6.58571,9.05759-.41732,16.4636-3.59782,17.82043-7.36721a5.05658,5.05658,0,0,0-1.54784-.20635l-34.19915.88312A4.91207,4.91207,0,0,0,482.08653,550.38152Z" transform="translate(-224.43432 -171.79265)" fill="#fff"/><path d="M225.625,727.31065l748.75.30734a1.19068,1.19068,0,0,0,0-2.38137l-748.75-.30733a1.19068,1.19068,0,1,0,0,2.38136Z" transform="translate(-224.43432 -171.79265)" fill="#cacaca"/><path d="M645.5755,461.20619a7.82193,7.82193,0,0,0-7.53635,7.88854,7.50491,7.50491,0,0,0,.1333,1.23334l-23.49857,13.87315,2.84432,14.40044,30.13545-22.48477a7.80023,7.80023,0,0,0,5.73687-7.60093,7.46479,7.46479,0,0,0-7.6101-7.31661Q645.67791,461.20136,645.5755,461.20619Z" transform="translate(-224.43432 -171.79265)" fill="#ffb6b6"/><path d="M626.32591,494.27915c-.62864-.84208-.89874-1.19462-1.04164-1.09788-.36793.222-.01389,3.19725-2.60182,8.38274-3.64349,7.28491-41.844,18.44233-41.844,18.44233l-4.70333-8.61053-20.68782-37.83969-7.13063-30.32979a13.53056,13.53056,0,0,1-.36077-3.2277,128.177,128.177,0,0,1,20.17133-11.61092,13.5043,13.5043,0,0,1,6.06057,7.22046l14.24065,39.92911,5.68258,15.9421s10.02413-7.16788,13.66019-5.85219c3.63018,1.324,4.66184-.53234,2.28889-6.47485-2.373-5.94254,1.1888.17448,5.3336.56321,4.1531.39462,0,0,1.96174-2.52163s14.64468-3.94046,14.64468-3.94046l.26955.56271,4.915,10.11037,1.40707,2.90478s-5.21062,5.65345-6.46781,6.78012c-1.26307,1.135-1.65316,1.05648-1.03474,2.34947C631.69936,497.24805,628.50906,497.18951,626.32591,494.27915Z" transform="translate(-224.43432 -171.79265)" fill="#c94e02"/></svg>
                </section>
                <section className='svg-text-container'>
                    <p className='svg-text'>
                        Do you like Reading?? <br></br>
                        <i>If yes, "Site Name" is here for you. Well if no, we are still here for you. We are determined to bring the best books and reading resources to your very doorstep and also make reading more fun and interesting. Yes you heard that, reading CAN be fun and intersting. So feel free to look around and journey through the lands of knowledge and wisdom.</i>
                    </p>
                </section>
            </section>

            <section>

            </section>

            <section className='who-we-are'>
                <section className='who-we-are-big-text'>
                    WHO WE ARE
                </section>
                <section className='who-we-are-small-text'>
                    We are a group of individuals who have come together with a common goal and interest namely "Our love for books". So this motivated us to create a platform which makes it easy for books and other resources to be readily available to the outside world thereby giving birth to "Site Name". Here you can get your hands on thousands of different types of books, science books, art books, articles, research works and many more with just the click of a button. And believe me, we are not exaggerating. So why don't you dive right in and explore some books right now??!!<br>
                    </br>
                    <button className="btn-3">
                        <Link
                            activeClass="active"
                            to="book-section"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >
                            Books 
                            <FontAwesomeIcon icon={faBook} className="jfj" />
                        </Link>
                    </button>
                </section>

            </section>
        </div>
    );
}

export default SecondPage;