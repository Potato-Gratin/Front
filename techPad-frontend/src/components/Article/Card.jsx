'use client';

import { Card, CardContent } from "@mui/material";
import Title from "./Title";
import Text from "./Text";
import PostDate from "./PostDate";
import PostUser from "./PostUser";
import Favorite from "../Favorite";
import Comment from "../Comment";
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import { Button } from "@mui/material";
import { useTheme } from "@mui/material";

export default function ArticleCard({ title, user, date, text, favorite, comment }) {
    const theme = useTheme();

    return (
        <>
        {/* PC */}
        <Card
            sx={{
                display: { xs: 'none', md: 'block' },
                width: '65%',
                height: '100%',
                border: `1px solid ${theme.palette.navy.main}`,
                marginBottom: '1rem',
                borderRadius: '10px'
            }}>
            <CardContent>
                <div style={{ padding: '0 .5rem' }}>
                    <DnsOutlinedIcon sx={{ color: 'blue.main', fontSize: '3rem' }} />
                    <div style={{ display: 'flex' }}>
                        <Title title={title} sx={{ color: `${theme.palette.navy.main}`, fontSize: '1.8rem', fontWeight: 'bold' }} />
                        <PostUser user={user} sx={{ alignSelf: 'end', marginLeft: '.5rem', color: `${theme.palette.navy.main}`, fontSize: '1rem' }} />
                    </div>
                    <div style={{ paddingLeft: '.2rem', marginTop: '.2rem' }}>
                        <PostDate date={date} color="gray" size=".8rem" />
                    </div>
                    <hr />
                    <div style={{ marginTop: '1rem', padding: '0 1rem' }}>
                        <Text text={text} sx={{ color: `${theme.palette.navy.main}`, marginBottom: '1.5rem', fontSize: '1.2rem' }} />
                        <div style={{ display: 'flex', justifyContent: 'end' }}>
                            <Favorite num={favorite} iconSize="1rem" fontSize=".8rem" sx={{ color: `${theme.palette.navy.main}` }} />
                            <Comment num={comment} iconSize="1rem" fontSize=".8rem" sx={{ color: `${theme.palette.navy.main}`, marginLeft: '2rem' }} />
                        </div>
                    </div>
                </div>
                <Button
                    variant="contained"
                    type="a"
                    href="#"
                    sx={{
                        marginTop: '1rem',
                        backgroundColor: `${theme.palette.navy.main}`,
                        color: 'white',
                        width: '100%',
                        height: '2.3rem',
                        borderRadius: '10px',
                        '&:hover': {
                            backgroundColor: `${theme.palette.navy.main}`,
                        }
                    }}>
                    もっと見る
                </Button>
            </CardContent>
        </Card>
        {/* PC */}

        {/* モバイル */}
        <Card sx={{ display: { xs: 'block', md: 'none' }, width: '100%', height: '100%', border: `1px solid ${theme.palette.navy.main}` }}>
            <CardContent sx={{ '&:last-child': { paddingBottom: '1rem' } }}>
                <div style={{ padding: '0 .5rem' }}>
                    <div style={{ display: 'flex' }}>
                        <DnsOutlinedIcon sx={{ color: `${theme.palette.blue.main}`, fontSize: '1.5rem' }} />
                        <Title title={title}  sx={{ alignSelf: 'end', color: `${theme.palette.navy.main}`, fontSize: '1rem', fontWeight: 'bold', marginLeft: '.3rem' }} />
                        <PostUser user={user} sx={{ alignSelf: 'end', marginLeft: '.5rem', color: `${theme.palette.navy.main}`, fontSize: '.7rem' }} />
                    </div>
                    <div style={{ paddingLeft: '.2rem' }}>
                        <PostDate date={date} color="gray" size=".5rem" />
                    </div>
                    <hr />
                    <div style={{ marginTop: '1rem', padding: '0 .5rem' }}>
                        <Text text={text} sx={{ color: `${theme.palette.navy.main}`, fontSize: '.7rem', marginBottom: '1rem' }} />
                        <div style={{ display: 'flex' }}>
                            <Favorite num={favorite} iconSize=".8rem" fontSize=".6rem" sx={{ color: `${theme.palette.navy.main}` }} />
                            <Comment num={comment} iconSize=".8rem" fontSize=".6rem" sx={{ color: `${theme.palette.navy.main}`, marginLeft: '1.5rem' }} />
                        </div>
                    </div>
                </div>
                <Button
                    variant="contained"
                    type="a"
                    href="#"
                    sx={{
                        marginTop: '1rem',
                        backgroundColor: `${theme.palette.navy.main}`,
                        color: 'white',
                        width: '100%',
                        height: '1.4rem',
                        fontSize: '.7rem',
                        borderRadius: '10px',
                        '&:hover': {
                            backgroundColor: `${theme.palette.navy.main}`,
                        }
                    }}>
                    もっと見る
                </Button>
            </CardContent>
        </Card>
        {/* モバイル */}
        </>
    );
}