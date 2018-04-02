import React, {Component} from 'react';
import {connect} from 'react-redux';

class ContentQuran extends Component {
    render() {
        if(!this.props.aSurah.data || !this.props.aSurahEn.data) {
            return <p>Loading...</p>
        }

        const name = this.props.aSurah.data.name;
        const mainSurah = this.props.aSurah.data.verse;
        const lineSurah = Object.keys(mainSurah).map((key, ind) => {
            return <li className="list-group-item" key={key}>{mainSurah[key]} <span>{ind}</span></li>
        });

        const mainSurahEn = this.props.aSurahEn.data.verse;
        const lineSurahEn = Object.keys(mainSurahEn).map((key, ind) => {
            return <li className="list-group-item" key={key}><span>{ind}</span>{mainSurahEn[key]}</li>
        });

        return (
            <div>
                <h3>{name}</h3>
                <ul className="surah list-group">
                    {lineSurah}
                </ul>
                <ul className="surahEn list-group">
                    {lineSurahEn}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        aSurah: state.aSurahData,
        aSurahEn: state.aSurahEnData
    }
}

export default connect(mapStateToProps)(ContentQuran);