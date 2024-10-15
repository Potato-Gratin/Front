import { Card, CardContent } from "@mui/material";
import Title from "./Title";
import Text from "./Text";
import PostDate from "./PostDate";
import PostUser from "./PostUser";
import Favorite from "../Favorite";
import Comment from "../Comment";
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import { Button } from "@mui/material";

export default function ArticleCard({ title, user, date, text, favorite, comment }) {
    return (
        <>
        {/* PC */}
        <Card sx={{ display: { xs: 'none', md: 'block' }, width: '100%', height: '100%', border: '1px solid navy', marginBottom: '1rem' }}>
            <CardContent>
                <div style={{ padding: '0 .5rem' }}>
                    <DnsOutlinedIcon sx={{ color: 'lightBlue.main', fontSize: '3rem' }} />
                    <div style={{ display: 'flex' }}>
                        <Title title={title} sx={{ color: 'navy.main', fontSize: '1.8rem', fontWeight: 'bold' }} />
                        <PostUser user={user} sx={{ alignSelf: 'end', marginLeft: '.5rem', color: 'navy.main', fontSize: '1rem' }} />
                    </div>
                    <div style={{ paddingLeft: '.2rem', marginTop: '.2rem' }}>
                        <PostDate date={date} color="gray" size=".8rem" />
                    </div>
                    <hr />
                    <div style={{ marginTop: '1rem', padding: '0 1rem' }}>
                        <Text text={text} sx={{ color: 'navy.main', marginBottom: '1.5rem', fontSize: '1.2rem' }} />
                        <div style={{ display: 'flex' }}>
                            <Favorite num={favorite} iconSize="1.2rem" fontSize=".75rem" sx={{ color: 'navy.main' }} />
                            <Comment num={comment} iconSize="1.2rem" fontSize=".75rem" sx={{ color: 'navy.main', marginLeft: '2rem' }} />
                        </div>
                    </div>
                </div>
                <Button
                    variant="contained"
                    type="a"
                    href="#"
                    sx={{
                        marginTop: '1rem',
                        backgroundColor: 'navy.main',
                        color: 'white',
                        width: '100%',
                        height: '2.3rem',
                        borderRadius: '10px',
                        '&:hover': {
                            backgroundColor: 'navy.main',
                        }
                    }}>
                    もっと見る
                </Button>
            </CardContent>
        </Card>
        {/* PC */}

        {/* モバイル */}
        <Card sx={{ display: { xs: 'block', md: 'none' }, width: '100%', height: '100%', border: '1px solid navy' }}>
            <CardContent sx={{ '&:last-child': { paddingBottom: '1rem' } }}>
                <div style={{ padding: '0 .5rem' }}>
                    <div style={{ display: 'flex' }}>
                    <DnsOutlinedIcon sx={{ color: 'lightBlue.main', fontSize: '1.5rem' }} />
                        <Title title={title}  sx={{ alignSelf: 'end', color: 'navy.main', fontSize: '1rem', fontWeight: 'bold', marginLeft: '.3rem' }} />
                        <PostUser user={user} sx={{ alignSelf: 'end', marginLeft: '.5rem', color: 'navy.main', fontSize: '.7rem' }} />
                    </div>
                    <div style={{ paddingLeft: '.2rem' }}>
                        <PostDate date={date} color="gray" size=".5rem" />
                    </div>
                    <hr />
                    <div style={{ marginTop: '1rem', padding: '0 .5rem' }}>
                        <Text text={text} sx={{ color: 'navy.main', fontSize: '.7rem', marginBottom: '1rem' }} />
                        <div style={{ display: 'flex' }}>
                            <Favorite num={favorite} iconSize=".8rem" fontSize=".6rem" sx={{ color: 'navy.main' }} />
                            <Comment num={comment} iconSize=".8rem" fontSize=".6rem" sx={{ color: 'navy.main', marginLeft: '1.5rem' }} />
                        </div>
                    </div>
                </div>
                <Button
                    variant="contained"
                    type="a"
                    href="#"
                    sx={{
                        marginTop: '1rem',
                        backgroundColor: 'navy.main',
                        color: 'white',
                        width: '100%',
                        height: '1.4rem',
                        fontSize: '.7rem',
                        borderRadius: '10px',
                        '&:hover': {
                            backgroundColor: 'navy.main',
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