import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getASurah,getASurahEn} from '../actions';

class ContentSidebar extends Component {
    componentDidMount() {
        this.props.getASurah(1);
        this.props.getASurahEn(1);
    }

    selectSurah(num) {
        this.props.getASurah(num);
        this.props.getASurahEn(num);
        document.querySelector('.content').scrollTop = 0;
    }

    render() {
        if(this.props.quranList.data === undefined) {
            return <div>Loading...</div>
        }

        const surahList = this.props.quranList.data.map((surah, index) => {
            return (
                <li onClick={(num) => this.selectSurah(index + 1)} key={surah.title} className="list-group-item"><span>{index + 1}</span> {surah.title}</li>
            )
        });

        return (
            <ul className="list-group sidebar-content">
                <span className="title">Holy Quran</span>
                {surahList}
                <span className="footer"><a href="https://www.zonayed.me">zonayedpca</a></span>
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        quranList: state.quranData
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getASurah, getASurahEn}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentSidebar);