

#ifndef BINAWATCH_UTILS
#define BINAWATCH_UTILS

#include <string>
#include <sstream>
#include <vector>
#include <string.h>
#include <sys/time.h>
#include <openssl/hmac.h>

using namespace std;

void split_string( string &s, char delim, vector <string> &result);
bool replace_string( string& str, const char *from, const char *to);


string b2a_hex( char *byte_arr, int n );
time_t get_current_epoch();
unsigned long get_current_ms_epoch();

//--------------------
template <class T>
inline string to_string (const T& t)
{
    stringstream ss;
    ss << t;
    return ss.str();
}

//--------------------
inline bool file_exists (const std::string& name) {
 	 return ( access( name.c_str(), F_OK ) != -1 );
}

string hmac_sha256( const char *key, const char *data);


#endif
