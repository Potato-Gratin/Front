import { Card, CardContent } from "@mui/material";
import Title from "./card/Title";
import Text from "./card/Text";
import PostDate from "./card/PostDate";
import PostUser from "./card/PostUser";
import Favorite from "../Favorite";
import Comment from "../Comment";
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import { Button } from "@mui/material";
import { useTheme } from "@mui/material";

export default function ArticleCard({ title, user, date, text, favorite, comment }) {
    const theme = useTheme();

    return (
        <>
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
                        {/* アイコン */}
                        <DnsOutlinedIcon sx={{ color: 'blue.main', fontSize: '3rem' }} />

                        <div style={{ display: 'flex' }}>
                            {/* タイトル */}
                            <Title
                                title={title.length > 20 ? `${title.substring(0, 20)}...` : title}
                                sx={{ color: `${theme.palette.navy.main}`, fontSize: '1.8rem', fontWeight: 'bold' }}
                            />

                            {/* 投稿者 */}
                            <PostUser user={user} sx={{ alignSelf: 'end', marginLeft: '.5rem', color: `${theme.palette.navy.main}`, fontSize: '1rem' }} />
                        </div>
                        <div style={{ paddingLeft: '.2rem', marginTop: '.8rem' }}>
                            {/* 最終更新日 */}
                            <PostDate date={date} color="gray" size=".8rem" />
                        </div>
                        <hr />
                        <div style={{ marginTop: '1rem', padding: '0 1rem' }}>
                            {/* 本文 */}
                            <Text
                                text={text.length > 100 ? `${text.substring(0, 100)}...` : text}
                                sx={{ color: `${theme.palette.navy.main}`, marginBottom: '1.5rem', fontSize: '1rem' }}
                            />
                            <div style={{ display: 'flex', justifyContent: 'end' }}>
                                {/* いいね数 */}
                                <Favorite num={favorite} iconSize="1rem" fontSize=".8rem" sx={{ color: theme.palette.navy.main }} />

                                {/* レビュー数 */}
                                <Comment num={comment} iconSize="1rem" fontSize=".8rem" sx={{ color: theme.palette.navy.main }} />
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
        </>
    );
}