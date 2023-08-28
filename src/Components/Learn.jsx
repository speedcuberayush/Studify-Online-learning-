import * as React from "react";
import "./styles/Learn.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import TimelineIcon from "@mui/icons-material/Timeline";
import FeedIcon from "@mui/icons-material/Feed";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Learn() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        display: "flex",
        // height: "1", // Make the container occupy full viewport height
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className="sidebarhumainjatihaikya"
        sx={{
          backgroundColor: "#000",
          height: "80vh",
          width: "20%",
          borderRight: 1,
          borderColor: "divider",
          "& .MuiTabs-indicator": {
            border: 2,
            borderColor: "#0096ff",
            borderRadius: "10px",
          },
          "& .MuiTab-root": {
            color: "#fff",
            "&.Mui-selected": {
              color: "#0096ff",
            },
          },
        }}
      >
        <Tab
          className="sidebarhumainjatihaikya"
          icon={<AutoStoriesIcon />}
          label="COURSES"
          {...a11yProps(0)}
        />
        <Tab
          className="sidebarhumainjatihaikya"
          icon={<FeedIcon />}
          label="ARTICLES"
          {...a11yProps(1)}
        />
        <Tab
          className="sidebarhumainjatihaikya"
          icon={<TimelineIcon />}
          label="ROADMAPS"
          {...a11yProps(2)}
        />
        <Tab
          className="sidebarhumainjatihaikya"
          icon={<AutoAwesomeMosaicIcon/>}
          label="REFERENCESS"
          {...a11yProps(3)}
        />
      </Tabs>
      <div
        style={{
          flex: 1, // Allow the TabPanel to take remaining width
          display: "flex",
          alignItems: "center", // Center vertically
          justifyContent: "center", // Center horizontally
        }}
      >
        <div>
          <TabPanel
            style={{
              overflowY: "scroll",
              height: "80vh",
            }}
            value={value}
            index={0}
          >
            Item One Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Incidunt qui totam neque, cupiditate sequi pariatur quo maxime ad
            accusantium, inventore, perferendis cum. Modi laboriosam eum,
            expedita illum facilis adipisci aperiam deleniti libero perferendis
            voluptates recusandae dolorem quo ducimus id dolorum accusantium
            quisquam vitae quis eius omnis itaque esse nesciunt? Libero
            molestias sequi laborum delectus facilis ratione dolorum tenetur
            commodi id nihil facere repellendus quisquam, nisi doloremque
            officiis, velit exercitationem veritatis laboriosam est deserunt
            voluptatibus. Quae illum, totam corporis sed non veniam dolores
            delectus modi distinctio velit commodi quos blanditiis excepturi
            officia pariatur necessitatibus incidunt possimus numquam eum
            placeat ipsum ad cum! Nisi totam perspiciatis dignissimos quisquam
            fuga id ducimus sunt repudiandae! Nesciunt vel, asperiores molestias
            harum veritatis molestiae. Nostrum dolores ipsum ab nihil voluptate
            laudantium harum sunt et ipsam eaque reiciendis sapiente deleniti
            eveniet, blanditiis rem, aliquam consequuntur necessitatibus
            possimus iusto sed ex hic aperiam fugiat dolorem? Totam alias
            placeat at, libero voluptate id magni est ipsam modi porro? Dicta
            officiis quidem consequuntur veritatis vel doloribus dolorem,
            laboriosam dolor totam, quasi ratione, fugit debitis architecto in
            doloremque sit dignissimos? Libero porro quam accusamus fugiat
            ratione corrupti, vel maiores aut est itaque autem deleniti eaque,
            asperiores saepe repudiandae aliquid animi. Iste reiciendis expedita
            officiis minus? Facilis tempora repudiandae deserunt ea voluptate
            amet maiores, magnam harum ullam tenetur, natus vel assumenda
            maxime, eum illo! Sint voluptates sequi ipsam quas deserunt odit
            voluptas! Adipisci libero fugiat blanditiis neque dolorum ipsam
            consequuntur facere velit mollitia dolores ex, minima incidunt omnis
            corrupti eum quae iure officiis! Qui, nesciunt inventore. Eligendi,
            minus. Porro rem odit unde natus placeat vero itaque dolorum
            perferendis maxime, sequi ipsam non ipsa sit est cumque. Cum maiores
            unde quo expedita est! Voluptatem voluptas tempore id laudantium
            unde dolore exercitationem quam, quo blanditiis, molestias expedita
            reiciendis esse fugiat eaque laborum. Reprehenderit reiciendis
            laudantium saepe id, accusamus iste perferendis error quis ipsa,
            aliquid at quaerat quia aspernatur maxime similique in. Totam soluta
            nemo quaerat illum aliquam eveniet ducimus impedit libero, sit modi
            deleniti molestias dolorem obcaecati. Sunt nulla aperiam magnam
            atque, doloribus, esse est deleniti itaque explicabo necessitatibus
            culpa! Laboriosam ipsam perspiciatis facilis asperiores at eveniet,
            ratione voluptate non magni blanditiis. Nemo culpa assumenda nostrum
            quisquam, vero harum quos temporibus, reiciendis enim nulla esse ut
            dolores quae error possimus cum veritatis dolor libero quasi minus.
            Omnis consequuntur recusandae facere sit, iste assumenda soluta iure
            autem mollitia numquam cupiditate dolorem! Aspernatur aut suscipit
            ipsa esse ut quia dolorum illo eum eveniet soluta excepturi, nihil
            maiores voluptate alias rem illum omnis nulla tempore officiis
            accusantium cum? Dolorem sit, dicta nobis accusantium inventore
            nihil consequatur qui rem dolorum? Facilis placeat, quo ad fuga
            aliquid saepe neque voluptate maiores eaque doloremque beatae! Unde
            earum facere pariatur nam porro numquam obcaecati beatae praesentium
            qui harum dignissimos assumenda possimus, ipsum perferendis, labore
            reiciendis fugiat cupiditate, sit officiis tempora doloribus dolorem
            inventore ratione! Minus molestias nesciunt hic earum omnis? Eos
            ipsa voluptas nisi omnis qui id quibusdam ab dolorum illum ipsum
            natus tempore aspernatur, quod magni eveniet repellat vero, optio
            deserunt accusamus a voluptatum saepe consequatur nobis reiciendis!
            Iste, pariatur blanditiis. Atque repudiandae officia nulla saepe
            omnis sapiente similique deleniti cum sequi dignissimos.
            Perferendis, perspiciatis dolores incidunt placeat consequatur hic
            magnam laborum accusantium deserunt id eaque. Provident ipsam, iure
            necessitatibus cum molestiae quod magni distinctio, velit maxime
            tenetur modi! Veritatis voluptate necessitatibus magni soluta nam
            sed quasi, accusantium, id sequi atque aut architecto. In velit
            temporibus, facere ut assumenda quaerat, quos possimus sed iure odit
            hic repellendus nihil culpa molestiae maiores fuga. Quo quisquam
            eveniet, tempora ab eius numquam. Aperiam earum, explicabo dolorum
            et dolore, laboriosam quis impedit quos id aliquid cum sunt nisi!
            Libero cupiditate harum soluta dicta consectetur ad officia, dolorem
            rerum possimus omnis voluptas nesciunt, ea ratione aliquam. Rerum
            incidunt tempora dolorum! Tempora obcaecati quisquam unde, aliquid
            quos labore eum recusandae natus repellat facere quae cumque enim
            inventore fuga molestiae ea harum, atque consequuntur maiores magnam
            neque possimus. Magnam, nulla id, eaque nostrum similique magni,
            quod autem deleniti mollitia maxime totam? Aut reiciendis ipsum nam,
            ipsam delectus in doloremque quia harum, laboriosam voluptate ut
            soluta accusantium consequuntur quam molestias provident ex unde sed
            suscipit. Voluptatum quisquam reiciendis quae aperiam possimus
            voluptatibus dignissimos, eveniet corrupti eius, consequuntur
            pariatur minima iure asperiores quis nulla et laboriosam porro,
            doloribus officiis necessitatibus. Magnam temporibus amet vel
            sapiente reiciendis suscipit eligendi voluptatibus ducimus nostrum?
            Fuga ratione maiores dolorem odit earum saepe magnam fugiat
            cupiditate sit assumenda? Illum sit enim consequatur? Beatae, nulla
            debitis. Accusantium fugit corrupti at quos magni tenetur corporis?
            Dolore, commodi sequi! Modi cupiditate deserunt perferendis? At
            natus laboriosam impedit, commodi aut fugiat sed sunt voluptate
            veniam itaque unde exercitationem ducimus? Ratione expedita harum
            voluptates eaque, alias dignissimos perferendis possimus maiores?
            Aliquid hic vitae voluptates possimus placeat accusamus modi, quasi
            voluptate libero distinctio quaerat. Blanditiis reprehenderit
            provident sint sequi assumenda voluptate distinctio voluptates
            debitis praesentium aliquam. Officiis eaque, voluptatem reiciendis
            eius doloremque voluptas ut aperiam voluptatum ab dolore assumenda
            cum ipsa, adipisci suscipit iusto vitae eum nobis! Atque, facilis.
            Nemo, dicta obcaecati error neque fuga similique deserunt hic
            repellat distinctio id quos exercitationem magnam consequuntur eius
            ad, eveniet doloremque cupiditate laborum esse! Quidem cum, dolorem
            omnis sunt quod quam minus magnam hic a fugit provident officiis
            similique blanditiis quibusdam tempora iusto saepe necessitatibus
            repudiandae officia nemo non animi alias fugiat? Amet voluptates
            dolorem voluptas aspernatur officia ipsum corporis nostrum mollitia
            aliquid! Ad, hic est aspernatur harum nulla libero necessitatibus
            sapiente autem id sit molestiae sed? Laudantium tenetur beatae
            accusamus, repellat sunt minima sapiente molestiae consequatur
            consectetur alias incidunt sint inventore temporibus doloribus
            nostrum aperiam odio ipsam, similique hic non dolor quis maiores.
            Repellat tempore sed praesentium, exercitationem explicabo, quasi ea
            sunt amet voluptatum cumque vel nulla aliquam, vitae nemo nisi aut
            odit laudantium facere dolorum harum expedita minus quis perferendis
            eius. Vitae alias eaque in quae numquam mollitia quidem sunt, ipsa
            porro qui nulla. Tenetur reprehenderit, harum nostrum quod in hic
            aspernatur fuga tempore cum, eius praesentium iste ab illum at
            repellendus voluptates, aut inventore voluptate quo rem sequi
            repellat vel. Excepturi suscipit doloremque ex sunt alias quisquam,
            officiis consequuntur nesciunt quam distinctio adipisci asperiores
            cupiditate ea magni enim in, recusandae quos, dolorem dolorum nihil
            numquam possimus obcaecati! Libero laborum illum assumenda non
            dolorem voluptas. Veniam, dolore. Eveniet, maiores iste veritatis,
            ab, tempora sunt cupiditate laboriosam suscipit porro accusantium ex
            vel reiciendis quaerat odit tenetur molestiae. Aut facilis voluptate
            voluptates, mollitia nemo dignissimos distinctio labore. Earum
            accusamus consectetur voluptatibus ab eius aspernatur, veniam
            assumenda omnis, at voluptates tempora rem fuga. Laudantium eaque
            temporibus non ipsam quos natus illo suscipit voluptas mollitia
            corrupti quasi earum repudiandae, nostrum totam? Error rerum quis
            magni ullam ipsam exercitationem, sit laudantium aspernatur,
            voluptatibus, aliquid voluptates! Quas animi atque veritatis
            eligendi! Rem quia sequi, maxime reiciendis eius consequatur iste
            debitis, voluptatem ipsam excepturi molestias eos? Accusantium id
            ullam totam quidem iure architecto molestiae. Adipisci accusantium
            cum necessitatibus itaque molestiae repellendus fuga aliquam rem
            officia? Voluptas, necessitatibus! Dolores itaque tempore dolor.
            Magnam quidem qui doloribus vel id vero provident aspernatur sed
            suscipit rem voluptatum facere dolores impedit, inventore nisi
            doloremque minima, sit placeat distinctio sapiente eius consequatur!
            Ullam voluptatum soluta consequatur est beatae nemo, quia vero. Amet
            accusamus dolore tempora veniam quod, autem ipsum ab vitae
            consectetur facilis consequatur sapiente! Totam dolores dignissimos
            optio corrupti veritatis, magni vel ea quis minima iste cum
            architecto iure debitis. At incidunt ex nostrum dicta dolor
            laudantium sapiente, pariatur placeat facere sunt ut doloribus
            maxime nisi repudiandae consequatur dignissimos accusamus odio
            officiis. Debitis neque, illo soluta dolorum fugiat maxime expedita
            atque cumque repellat nihil accusamus mollitia eos, optio numquam
            reiciendis voluptatem perferendis deserunt qui deleniti consequatur
            eum sed consectetur incidunt explicabo? Perferendis magni excepturi
            obcaecati natus quidem similique ducimus minima rerum voluptatem.
            Quia, est? Ea amet sunt repudiandae explicabo voluptatum harum
            perferendis ducimus, quae at fugit nemo dolorum placeat, unde
            maiores qui in voluptatem dolorem, officiis a earum. Quidem
            perferendis totam expedita in aliquid similique aut dolores
            blanditiis. Nam veniam, doloremque libero aspernatur provident
            possimus, pariatur magni voluptas molestiae minima ipsum! Fuga enim
            suscipit qui omnis! Iure similique vero eaque nemo in eum ut,
            temporibus quaerat autem quam placeat dolorum at, distinctio sit,
            sequi cum praesentium animi? Nihil sit sint nesciunt! Architecto,
            odit commodi perspiciatis accusamus dolore dolorum omnis? Ratione,
            quae accusamus? Tenetur explicabo consectetur dolorum non
            dignissimos tempore, repudiandae earum libero voluptates animi ut
            quidem ad reprehenderit nam cumque cupiditate? Magni dolor at
            adipisci. Blanditiis nesciunt natus sunt nostrum, tenetur reiciendis
            quos harum eos officia, modi animi eligendi ex aliquam nam eius
            numquam repellat aut? Cum alias, tenetur veniam tempora consequuntur
            asperiores eaque quia esse, accusantium inventore minus saepe
            molestias earum quam. Tempore quidem facilis illo quia officia
            aspernatur neque quis possimus minima fugiat exercitationem,
            laudantium vitae deserunt eveniet suscipit ipsam earum aliquid. Eum
            quaerat velit aut quos quam qui nostrum reprehenderit dolores ad
            doloremque voluptates assumenda odio nemo mollitia, adipisci cum
            quisquam perferendis nihil fugit accusamus. Atque, deserunt eveniet
            ut eius ex rem sequi labore aperiam quas odit, dolore ipsam facilis
            ratione totam quos cum deleniti dicta officia! Repudiandae quae
            nulla, aspernatur accusamus repellat facere facilis commodi delectus
            animi, nam, consequuntur quasi voluptate. Facilis impedit
            perspiciatis rem fuga, natus quos aliquam iusto possimus suscipit et
            eaque, eligendi quod ex iste est iure nesciunt sunt magnam saepe
            inventore? Perferendis quo iusto tempore unde perspiciatis
            doloremque et modi. Fugiat debitis atque provident illum cum,
            praesentium veniam at ipsa expedita dolorem quod, minima nam.
            Debitis quaerat, nisi culpa repellat tenetur illum harum
            consequuntur architecto aliquid numquam, voluptas minus? Vero,
            asperiores! Magnam qui praesentium magni autem nulla omnis error
            sequi consequatur illo? Consequatur, temporibus adipisci assumenda
            quam hic reiciendis officiis est similique recusandae eos nemo fuga
            sint eum suscipit perferendis velit cum, distinctio optio iste
            voluptatem! Assumenda natus recusandae suscipit ab enim quos porro
            dolorum libero quae! Assumenda unde maiores corrupti dolore enim
            distinctio eligendi, corporis sit similique. Distinctio maxime
            cumque iste vero quos eaque, perspiciatis laborum repellat autem
            sequi dolor! Quia illum accusantium earum numquam, ipsum fuga,
            quisquam maxime totam autem repellendus in consectetur cupiditate
            modi ut eum hic necessitatibus perspiciatis unde harum a quam
            officiis! Quis, sunt, repellendus temporibus, natus qui eius
            accusamus voluptatum quam eligendi autem ipsum ratione omnis
            voluptate alias reiciendis repellat nemo neque vitae ipsam
            consequuntur eaque. Veniam debitis a omnis natus deserunt
            consectetur ullam nostrum earum assumenda quod asperiores dolores
            at, ut placeat delectus recusandae saepe nesciunt ad excepturi vero
            aliquid consequuntur fuga! Voluptatum odit magnam sit modi beatae
            blanditiis possimus, alias iusto quae ex, aspernatur dolorem fugiat
            consequatur vel minima odio atque voluptatibus aut quisquam, totam
            ipsum. Soluta assumenda eius animi quidem deleniti rem minima maxime
            iusto consequatur nobis mollitia commodi, error suscipit quos
            voluptas rerum temporibus nisi molestias maiores sed quas. Beatae,
            odio! Eius optio temporibus, rerum quisquam voluptatibus vitae in
            accusantium sit nulla quae pariatur aut animi dolorum ab cumque unde
            alias reprehenderit nobis officia illum delectus voluptates vero!
            Architecto qui cum obcaecati minus alias ipsa itaque modi ut
            deserunt at necessitatibus nobis rerum, ullam suscipit inventore
            nulla molestiae placeat reiciendis doloremque hic sed veniam. In,
            quis labore inventore nulla illo possimus dicta, nobis nesciunt nemo
            quos dolor iusto error minus necessitatibus provident, minima unde
            quae delectus. Commodi, ratione architecto possimus illum minus
            magni aperiam, amet nemo nihil esse dolorem asperiores sint quam
            dolore rem sed facere vel autem sapiente. Et, ipsam nesciunt
            consectetur repellat perferendis quasi ex voluptatum deserunt optio,
            provident ad quo assumenda vel expedita deleniti facere dignissimos
            vitae dolores nulla? Vero ducimus corrupti rem nemo itaque harum
            libero quia impedit, magni assumenda tempora ipsam delectus neque,
            repudiandae dolor sequi ea, cupiditate optio? Eaque corporis ad ut
            reiciendis non illum ipsam cum provident et numquam, praesentium,
            aperiam possimus, suscipit temporibus quibusdam magnam sint quae
            quis voluptatum quia similique labore voluptatem dolor dicta!
            Debitis vel exercitationem reprehenderit sint dolores, quod, aut non
            corrupti ullam asperiores velit libero, voluptatum qui mollitia.
            Excepturi ipsum impedit reprehenderit dolores non. Quam, odit nulla
            sequi obcaecati deleniti laudantium magnam neque animi assumenda
            aliquam sapiente dolorem, saepe pariatur impedit porro. Enim id
            quisquam nesciunt nobis architecto cum quibusdam, cumque fugit
            accusamus distinctio adipisci nihil recusandae voluptate
            exercitationem officiis.
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Six
          </TabPanel>
          <TabPanel value={value} index={6}>
            Item Seven
          </TabPanel>
        </div>
      </div>
    </Box>
  );
}
