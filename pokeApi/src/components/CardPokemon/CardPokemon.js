import style from './_cardPokemon.module.css';

export const CardPokemon = ({ data }) => {
    return <div className={style.wrapper}>
        <div className={style.header}>
            <dvi>
                <img className={style.pulse} src={data?.sprites?.front_default} alt="" />
                <img className={style.pulse} src={data?.sprites?.front_shiny} alt="" />
            </dvi>
            <h2>{data.name} <span>n° - {data.id}</span></h2>
        </div>
        <hr />

        <div className={style.row}>
            {data?.types?.map((item, key) => <p key={key}>{item.type.name}</p>)}
        </div>

        <hr />

        <div className={style.row} >

            <div>
                <p><b>Experiencia base: </b>{data.base_experience}</p>
                <p><b>Altra: </b>{data.height}</p>
                <p><b>Peso: </b>{data.weight}</p>
            </div>

            <div>
                {data?.stats?.map((item, key) => <p key={key}><b>{item.stat.name}: </b>{item.base_stat}</p>)}
            </div>

        </div>
    </div>
}